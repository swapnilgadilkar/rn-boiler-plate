import {confirm} from '@inquirer/prompts';

const allowEmail = await confirm(
  {message: 'Do you allow us to send you email?'},
  {
    output: new Stream.Writable({
      write(chunk, _encoding, next) {
        // Do something
        next();
      },
    }),
    clearPromptOnDone: true,
  },
);
