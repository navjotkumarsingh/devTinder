# Devtinder API
##authRouter
-  POST/signup
-  POST/login
-  POST/logout

##profileRouter
-  GET/profile/view
-  PATCH/profile/edit
-  PATCH/profile/password

##connectionRequestRouter
-  POST/request/send/:status/:userId
-  POST/request/send/ignored/:userId
-  POST/request/review/accepted/:requestId
-  POST/request/review/rejected/:requestId

##userRouter
-  GET/user/connections
-  GET/user/requests/received
-  GET/user/feed.   - Get you profile of other user on platform.


Status- ignore accepted interested rejected
