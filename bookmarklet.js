javascript:(function()%7Bfunction%20SleepingCorgis(e%2Ct)%7Bthis.ratio%3De%3Bthis.imageurl%3Dt%7Dfunction%20Randomize(e)%7Breturn%20Math.floor(Math.random()*e.length)%7Dfunction%20imageRatio(e)%7Bvar%20t%3De.height%2Fe.width%3Bif(t%3E1)%7Breturn%22vertical%22%7Delse%20if(t%3D%3D%3D1)%7Breturn%22square%22%7Delse%20if(t%3C1)%7Breturn%22horizontal%22%7D%7Dvar%20getSleepingCorgis%3D%7Binit%3Afunction(e)%7Bthis.mySleepingCorgis%3De%7D%2Chorizontal%3Afunction()%7Breturn%20this.mySleepingCorgis.filter(function(e)%7Breturn%20e.ratio%3D%3D%3D%22horizontal%22%7D)%7D%2Cvertical%3Afunction()%7Breturn%20this.mySleepingCorgis.filter(function(e)%7Breturn%20e.ratio%3D%3D%3D%22vertical%22%7D)%7D%2Csquare%3Afunction()%7Breturn%20this.mySleepingCorgis.filter(function(e)%7Breturn%20e.ratio%3D%3D%3D%22square%22%7D)%7D%7D%3Bvar%20mySleepingCorgis%3D%5Bnew%20SleepingCorgis(%22horizontal%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-horiz-1.jpg%22)%2Cnew%20SleepingCorgis(%22horizontal%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-horiz-2.jpg%22)%2Cnew%20SleepingCorgis(%22horizontal%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-horiz-3.jpg%22)%2Cnew%20SleepingCorgis(%22horizontal%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-horiz-4.jpg%22)%2Cnew%20SleepingCorgis(%22horizontal%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-horiz-5.jpg%22)%2Cnew%20SleepingCorgis(%22horizontal%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-horiz-6.jpg%22)%2Cnew%20SleepingCorgis(%22horizontal%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-horiz-7.jpg%22)%2Cnew%20SleepingCorgis(%22horizontal%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-horiz-8.jpg%22)%2Cnew%20SleepingCorgis(%22horizontal%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-horiz-9.jpg%22)%2Cnew%20SleepingCorgis(%22vertical%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-vert-1.jpg%22)%2Cnew%20SleepingCorgis(%22vertical%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-vert-2.jpg%22)%2Cnew%20SleepingCorgis(%22vertical%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-vert-3.jpg%22)%2Cnew%20SleepingCorgis(%22vertical%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-vert-4.jpg%22)%2Cnew%20SleepingCorgis(%22vertical%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-vert-5.jpg%22)%2Cnew%20SleepingCorgis(%22vertical%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-vert-6.jpg%22)%2Cnew%20SleepingCorgis(%22square%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-square-1.jpg%22)%2Cnew%20SleepingCorgis(%22square%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-square-2.jpg%22)%2Cnew%20SleepingCorgis(%22square%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-square-3.jpg%22)%2Cnew%20SleepingCorgis(%22square%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-square-4.jpg%22)%2Cnew%20SleepingCorgis(%22square%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-square-5.jpg%22)%2Cnew%20SleepingCorgis(%22square%22%2C%22http%3A%2F%2Fbkellgren.github.io%2Fsleepingcorgis%2Fthe_sleeping_corgies%2Fcorgie-square-6.jpg%22)%5D%3B(function(e)%7BgetSleepingCorgis.init(mySleepingCorgis)%3Bvar%20t%3De.getElementsByTagName(%22img%22)%2Cn%3Dt.length%3Bfor(var%20r%3D0%3Br%3Cn%3Br%2B%2B)%7Bvar%20i%3DimageRatio(t%5Br%5D)%3Bvar%20s%3DRandomize(getSleepingCorgis%5Bi%5D())%3Bvar%20o%3DgetSleepingCorgis%5Bi%5D()%5Bs%5D%3Bt%5Br%5D.src%3Do.imageurl%7D%7D)(document)%7D)()
