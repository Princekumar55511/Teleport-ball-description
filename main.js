let ball = document.querySelector("#ball");
let blk = document.querySelector("#blk");
let button = document.querySelector("#btn");
let isRunning = false; 
let visible = 1 ;
let scale = 1 ;

button.addEventListener("click", () => {
  console.log("click")
  if (isRunning) return; 
      isRunning = true;
      button.disabled = true;
      button.style.backgroundColor = "#6A93A0"
      
      
      
      
      
      
      
      
      
      
      
      
      if (visible === 1 && scale === 1 ) {
      visible = 0
      
      function startblk() {
        return new Promise((resolve, reject) => {
          blk.style.opacity = 1
        blk.style.transform = "scale(1.5)"
        blk.style.top = "vh"
        resolve("1")
        });
        
      }
 
      function goball() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
          ball.style.opacity = 0
          ball.style.transform = "scale(0)"
          
          resolve("2")
          }, 2000)
        })
        
      }
      


      function endblk() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
          blk.style.opacity = 0
          blk.style.transform = "scale(0.2)"
          resolve("3")
          }, 1000)
        })
      }
      
      function telip() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            
            
            ball.style.position = "absolute";
            ball.style.left = "45vw";
            ball.style.top = "72vh";
            blk.style.position = "absolute";
            blk.style.left = "45vw";
            blk.style.top = "72vh";
            
            function GSopblk() {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  blk.style.opacity = 1;
                  blk.style.transform = "scale(0.5)";
                  resolve("S1")
                }, 2000)
              })
            }
            
            function GScoball() {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  ball.style.opacity = 1;
                  ball.style.transform = "scale(0.3)";
                  resolve("S2")
                }, 1000)
              })
            }
            
            function GSgoblk() {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  blk.style.opacity = 0;
                  blk.style.transform = "scale(0)";
                  isRunning = false;
                  button.disabled = false;
                  button.style.backgroundColor = "#0092C1";
                  resolve("S3")
                }, 1000)
              })
            }
            
            GSopblk().then(() => {
              GScoball().then(() => {
                GSgoblk()
              });
            });
            
            resolve("telip")
          }, 2000);
        })
      }
      
      startblk().then(() => {
        goball().then(() => {
          endblk().then(() => {
            telip()
          })
        })
      
      })
      
      
      
        
        
    } 
    else {
      visible = 1
      
      function bigbalk() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            
            function big1() {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  blk.style.opacity = 1
                  blk.style.transform = "scale(0.5)"
                  console.log("b1")
                  resolve("b1")
                }, 1000)
              })
            }
            function big2() {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  ball.style.opacity = 0
                  ball.style.transform = "scale(0)"
                  console.log("b2")
                  resolve("b2")
                }, 2000)
              })
            }
            function big3() {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  blk.style.opacity = 0
                  blk.style.transform = "scale(0)"
                  console.log("b3")
                  resolve("b3")
                }, 1000)
              })
            }
            function move() {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  ball.style.left = "10vw";
                  ball.style.top = "8vh";
                  blk.style.left = "10vw";
                  blk.style.top = "8vh";
                  resolve("move")
                }, 2000)
              })
            }
            
            big1().then(() => {
              big2().then(() => {
                big3().then(() => {
                  move()
                })
              })
            })
            resolve("big")
          }, 0000);
        });
      };
      
      
      function comeblk() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            blk.style.opacity = 1
            blk.style.transform = "scale(1.5)";
            console.log("steat");
            resolve("4");
          }, 8000);
          
        });
      };
      
      function comeball() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
          ball.style.opacity = 1
          ball.style.transform = "scale(1)"
          
          resolve("5")
          }, 2000)
        })
      }
      



      function goblk() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
          blk.style.opacity = 0
          blk.style.transform = "scale(0.2)"
          
          isRunning = false;
          button.disabled = false;
          button.style.backgroundColor = "#0092C1"
          resolve("6")
          }, 1500)
        })
      }
      
      bigbalk().then(() => {
        comeblk().then(() => {
          comeball().then(() => {
            goblk();
          });
        });
      });
     
     
        
     
        
        
     
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  
  
})







































    





let expanded = false;
const chatBox = document.getElementById("chatBox");
const btn = document.getElementById("mainBtn");
const input = document.getElementById("textInput");
const chatArea = document.getElementById("chatArea");

input.addEventListener("input", () => {
      if (input.value.trim() === "") {
        btn.classList.add("disabled");     // 🔹 Make button light when input empty
      } else {
        btn.classList.remove("disabled");  // 🔹 Activate button when typing
      }
    });

    function handleClick() {
      if (!expanded) {
        chatBox.classList.add("expanded");
        btn.innerHTML = "&#8593;";
        expanded = true;
      } else {
        const value = input.value.trim();
        if (value) {
          
          addMessage(value,"user");
          console.log(value);
          input.value = "";
          btn.classList.add("disabled");
          
          setTimeout(() => {
            const reply = getBotReply(value); // 🔁 Bot logic
            addMessage(reply, "bot"); // ✅ Bot bubble left
            }, 700);
        }
      }
    }
    function resetbtn() {
    chatBox.classList.remove("expanded"); 
    btn.innerHTML = "&#8594;";
    expanded = false; 
    };
    
    function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");

  if (sender === "user") {
    messageDiv.classList.add("user");
  } else if (sender === "bot") {
    messageDiv.classList.add("bot");
  }

  messageDiv.innerText = text;
  chatArea.appendChild(messageDiv);

  chatArea.scrollTop = chatArea.scrollHeight;
}

function getBotReply(msg) {
  const text = msg.toLowerCase();

  if (text === "hi" || text === "hello" || text === "hay") {
    return "Hi, how are you?";
  } else if (text === "name" || text === "naam") {
    return "My name is AI assistant";
  } else {
    return "Mujhe samajh nahi aaya.";
  }
}













