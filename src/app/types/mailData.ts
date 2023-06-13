import { SendContent } from './sendContents';

export type MailData = {
  from: string;
} & SendContent;
