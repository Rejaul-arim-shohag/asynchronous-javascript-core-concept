// const hasMeeting = false; // er mane meeting nai
const hasMeeting = true; //er mane meeting ace

//promise create
const meeting = new Promise((resolve, reject)=>{
    if(!hasMeeting){ //er mane jodi meeting na thake
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: '10:00 PM'
        };
        resolve(meetingDetails)
    } else{
        reject(new Error("Meeting alreday scheduled"));
    }
});

//promise use
meeting
    .then((res)=>{
       console.log(JSON.stringify(res));
    })
    .catch((err)=>{
        console.log(err.message);
    });

    console.log('Hello')