import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import 'dotenv/config';

const region = 'kr-standard';
const acssessKey = process.env.S3_ACCESS_KEY;
const secretKey = process.env.S3_SECRET_KEY;
const endpoint = 'https://kr.object.ncloudstorage.com';

const S3 = new S3Client({
  region,
  endpoint,
  credentials: {
    accessKeyId: acssessKey as string,
    secretAccessKey: secretKey as string,
  },
});

export { S3, PutObjectCommand, Upload };
