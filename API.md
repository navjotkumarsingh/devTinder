# DevCoNN API
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
-  POST/request/review/:status/:requestId

##userRouter
-  GET/user/requests/received
-  GET/user/connections
-  GET/user/feed.   - Get you profile of other user on platform.


Status- ignore accepted interested rejected
