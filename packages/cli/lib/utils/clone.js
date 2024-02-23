import download from 'download-git-repo';
import ora from 'ora';
import { promisify } from 'util';

export default async (repo, desc) => {
  const process = ora(`下载.....${repo}`);
  process.start();
  await promisify(download)(repo, desc);
  process.succeed();
};
