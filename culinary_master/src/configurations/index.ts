import * as process from 'node:process';

export default () => ({
  port: process.env.PORT || 3000,
});
