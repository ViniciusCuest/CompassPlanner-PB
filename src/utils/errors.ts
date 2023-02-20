export const errors = (code: number | string, page: string): string => {
   if (page === 'Login') {
      switch (code) {
         case 404:
            return `No response available for while... We're working on it`;
         case 200:
            return `You're logged in Planner 😉`;
         case 400:
            return 'Your credentials are incorrect, please try again!';
         case 500:
            return 'Our server is out for while... 😥';
      }
   }

   if (page === 'Register') {
      switch (code) {
         case 200:
            return `You're registered now ☺`;
         case 500:
            return 'Our server is out for while... 😥';
         case 400:
            return 'This email is being used by another account, please Sign-in or use other email';
      }
   }

   if (page === 'Dashboard') {
      switch (code) {
         case 200:
            return '';
      }
   }

   return ''
}
