import mongoose from 'mongoose';
import 'dotenv/config';
import { createTunnel } from 'tunnel-ssh';

const setDbConnection = async () => {
  const isLocal = process.env.IS_LOCAL === 'true';

  if (isLocal) {
    const tunnelOptions = {
      autoClose: true,
    };

    const sshOptions = {
      host: process.env.SSH_HOST,
      port: process.env.SSH_PORT,
      username: process.env.SSH_USER,
      password: process.env.SSH_PASSWORD,
    };

    const serverOptions = {
      port: parseInt(process.env.LOCAL_PORT || '27018', 10) || 27018,
    };

    const forwardOptions = {
      dstAddr: process.env.SSH_DATABASE_HOST,
      dstPort: parseInt(process.env.SSH_DATABASE_PORT || '27017', 10),
    };

    try {
      const [server] = await createTunnel(tunnelOptions, serverOptions, sshOptions, forwardOptions);

      const address = server.address();
      if (address && typeof address !== 'string') {
        console.log(`SSH 터널이 수신 대기 중입니다.`);
      } else {
        console.error('서버 주소를 가져올 수 없습니다.');
        return;
      }
    } catch (error) {
      console.error('SSH 터널링 오류:', error);
      return;
    }
  }

  try {
    await mongoose.connect(process.env.MONGO_URI || '');
    console.log('MongoDB에 성공적으로 연결되었습니다.');
  } catch (error) {
    console.error('MongoDB 연결 오류:', error);
  }
};

setDbConnection();
