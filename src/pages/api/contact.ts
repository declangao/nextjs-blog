import { isValidEmail } from '@/util/utils';
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

import config from '@/config';
import { Message } from '@/types';

type Data = {
  message: string;
  result?: Message;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (
      !name ||
      name.trim() === '' ||
      !email ||
      !isValidEmail(email) ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage: Message = {
      name,
      email,
      message,
    };

    let client;
    const connectionString = `mongodb+srv://${config.mongodbUsername}:${config.mongodbPassword}@${config.mongodbCluster}.4gcubwo.mongodb.net/${config.mongodbDatabase}?retryWrites=true&w=majority`;

    try {
      client = new MongoClient(connectionString);
      await client.connect();
    } catch (err) {
      res.status(500).json({ message: 'Cannot connect to database.' });
      return;
    }

    const db = client.db();

    try {
      const result = await db
        .collection(config.mongodbCollection)
        .insertOne(newMessage);
      newMessage.id = result.insertedId.toString();
    } catch (err) {
      client.close();
      res.status(500).json({ message: 'Failed to save message to database.' });
      return;
    }
    client.close();

    res.status(201).json({ message: 'Message sent.', result: newMessage });
  }
}
