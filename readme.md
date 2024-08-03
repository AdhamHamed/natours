# Natours Application

Built using modern technologies: Node.js, Express, MongoDB, Mongoose, midnight thoughts and friends☺

---

# In-Depth Project Explaination:

This project is a portfolio project provided from Jonas Schmedtmann's [Node.js Course](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/?couponCode=LETSLEARNNOWPP). It's really a helpful course and very versatile.

# The technologies are :
1. Mainly Node.js including specifically express framework.
2. MongoDB as database with mongoose.
3. Jade aka Pug as template engine.
4. Parcel for bundling.
5. Heroku for app deployment.

---

**THESE ARE SOLUTIONS THAT WORKED FOR ME PERSONALLY, KEEP IN MIND THAT IN TERMS OF COMPELTION, THE PROJECT IS ANYTHING/EVERYTHING BUT FINISHED/COMPLETE.**

# Problems in course:

While the course provide really amazing and helpful content, there are many ~~at the very least could be called lunatic~~ problmes that appear in course due to mainly out-dated collection of packages and of course over a span of **five years**, there should be quite much differences.

Problems were the next:

1- In section *Error Handling*, there's a certain problem with sendErrDev/sendErrProd; mainly the if condition is not reading the NODE_ENV variable as production so it doesn't execute, there are two solutions for this: first is to just turn *else if* into simply just *else*, and since there are only two environments in this project, it should work just fine. The second was found out at a latter problem which is to store NODE_ENV in a separate variable with *.trim()* function applied to it because it mostly read an additional space out of no where.
--
2- A slight problem that could be solved by trial and error but a bit tricky to catch, while applying nodemailer and mailtrap.io, the mailer's port is set in the course to port 25; **IT DIFFERES**, so test which port should be working for you.
--
3- Down the whole way to mostly the end of the course to pug templates section, where most of the problems come to surface; I can't remember exactly the order of the problems but a crucial problem is where axios's cdnjs link is being read as a CSP violation; it's a *helmet()* problem, [simply check this link for better understanding along with solution](https://stackoverflow.com/questions/67601708/axios-cdn-link-refused-to-load).
--
4- While implementing the advanced email handler - the Email.js object basically - the first problem to appear is a problem with rendering pug files the way you wish them to be sent in the email as a reset/forgot password email. *It's a simple change in syntax for html-to-text package*, yet it's a **change** in the syntax and that's why the out-date concept started surfacing for me as a major problem in this course.
check the [usage part in the package's doucmentation here](https://github.com/html-to-text/node-html-to-text/blob/master/packages/html-to-text/README.md#usage), it's a simple change in *convert()*.
--
5- The one problem that led to a second solution in an earlier part of the course: while implemenitng SendGrid and mailsac for production emails, you'll notice that when you have conditions for both SendGrid and Nodemailer, it'll send straight to NodeMailer, if SendGrid was the only thing there, it'll be sent to SendGrid, and if NodeMailer is the only thing, it does succeed no matter the environment; simply just store NODE_ENV in a separate variable and apply *.trim()* to it and it'll work like magic.
--
6- Now there are exactly 3 problems here that are at this very point, remain unsolved, this particular porblem opens a gateway for 3 problems. The Parcel bundler simply doesn't just work, no matter how hard I try to go around it, it doesn't work, you'll find some porblems like *Cannot support import/export outside a module*, or *require() is not defined*. So far, the bundling solution was that I switched to webpack and bundling did work, but it made a second problem with stripe integration, where it doesn't accept it at all, exactly an error of *INCOMPLETE_CHUNKED_ENCODING 200(OK)* with a path to the bundling file. And the third problem is basically deployment because simply the webpack integration is incomplete. This repo doesn't include the webpack integration, but the problem remains.
--

# Bright Side of The Course:
Although the course has porblems, you still can get the most out of the it and ace Node.js along with the other technologies in this course; simply becuase 76% of the problmes are just on the last 2 sections which one of them is github deployment which realitvely is not a Node.js of itself. Another thing that this course teaches you, which is in my humble opinion is the most important thing you can learn from, is that it builds for you a logical stamina, where you can stick with the problem for much longer trying to figure out a soultion that never been digged for before especially since it's out-dated; it allows you to read and understand code that you *didn't write* and debug it and solve it, it's a comrpehensive training that you can never get from any course and funny how, it was never meant to be like that, being an out-dated course was never an intention for Mr. Schmedtmann. But still, it stands the point.

***Would I recommend it for beginners?*** Absolutely no. You see, if you're a beginner, and need to learn a new technology, finishing the project is one of the most important feedback you should have, a feedback that you won't get it here becasue it's crampled with problems right at the finish line. What would I recommend it for? Actually I wouldn't recommend it at all, You're someone having a course to learn a new thing, you need to provide a project in your portfolio to prove employers that you are indeed capable of dealing with the technology you're learning.

What's the bright side for then if it's not recommended, you may ask; It's typically for learners like me, who started the course and were stubborn enough to not refund/abandon it and search for some another course with a project that's more up-to-date. Learned many things, sure. Learned Node.js which is the main point, indeed. Proud of myself for digging up solutions for such problems, undeinable that is also why I'm still pushing the repo and still doing a readme that probably no one would read it. But if I was in a different time in my life, where I was a beginner and fragile to success/fail feedbacks, I would've literally just abandoned the whole filed of programming.

There is no course that is problem-free, but some problems are just out of hand and searching for solution would ruin the last working version of your project, that what happened to me personally while implementing webpack.
