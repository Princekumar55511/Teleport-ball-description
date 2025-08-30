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
          }, 800)
        })
      }
      
      
      
      
      
      
      
      
      
      
      
      
      
      function chatV() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
          chatArea.style.opacity = 0
          
          chatHeader.style.opacity = 0
          
          
          resolve("3")
          }, 2000)
        })
      }
      
      
      function chatCome() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
          chatArea.style.backgroundColor = "transparent"
          chatArea.style.width = "100vw"
          chatArea.style.left = "0vw"
          chatArea.style.top = "7vh"
          chatArea.style.maxHeight = "75vh"
          chatArea.style.minHeight = "15vh"
          chatArea.style.boxShadow = "none"
          chatArea.style.padding = "1vh 3vh 0.1vh 4vh"
          chatHeader.style.backgroundColor = "transparent"
          chatHeader.style.width = "100vw"
          chatHeader.style.left = "0vw"
          chatHeader.style.top = "1vh"
          chatHeader.style.height = "6vh"
          button.style.backgroundColor = "transparent"
          button.style.transform = "scale(3)"
          resolve("3")
          }, 1000)
        })
      }
      
      
      function chatSee() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
          chatArea.style.opacity = 1
          
          chatHeader.style.opacity = 1
          
          
          resolve("3")
          }, 850)
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
                }, 1900)
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
                  button.style.backgroundColor = "transparent";//#0092C1
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
            chatV().then(() => {
              chatCome().then(() => {
                chatSee().then(() => {
                  telip()
                })
              })
            })
          })
        })
      
      })
      
      
      
        
        
    } 
    else {
      visible = 1
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      function chatV() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
          chatArea.style.opacity = 0
          
          chatHeader.style.opacity = 0
          
          
          resolve("3")
          }, 1500)
        })
      }
      
      
      function chatCome() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
          chatArea.style.backgroundColor = "white"
          chatArea.style.width = "68vw"
          chatArea.style.left = "16.5vw"
          chatArea.style.top = "53vh"
          chatArea.style.maxHeight = "26.7vh"
          chatArea.style.minHeight = "4vh"
          chatArea.style.boxShadow = "0 0 5vh #6D74C4"
          chatArea.style.padding = "1vh 2vh 0.1vh 2vh"
          
          chatHeader.style.backgroundColor = "#D4D4D4"
          chatHeader.style.width = "68vw"
          chatHeader.style.left = "16.5vw"
          chatHeader.style.top = "50.4vh"
          chatHeader.style.height = "2vh"
          
          button.style.transform = "scale(1)"
          resolve("3")
          }, 1500)
        })
      }
      
      
      function chatSee() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
          chatArea.style.opacity = 1
          
          chatHeader.style.opacity = 1
          
          
          resolve("3")
          }, 2000)
        })
      }
      
      
      
      
      
      
      
      
      
      
      chatV().then(() => {
        chatCome().then(() => {
          chatSee()
        })
      })
      
      
      
      
      
      
      
      
      
      
      
      
      
      function bigbalk() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            
            function big1() {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  blk.style.opacity = 1
                  blk.style.transform = "scale(0.5)"
                  
                  resolve("b1")
                }, 1000)
              })
            }
            function big2() {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  ball.style.opacity = 0
                  ball.style.transform = "scale(0)"
                  
                  resolve("b2")
                }, 2000)
              })
            }
            function big3() {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  blk.style.opacity = 0
                  blk.style.transform = "scale(0)"
                  
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
const chatHeader = document.getElementById("chatHeader");

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
        
        function AreaV() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            chatHeader.classList.remove("expand");
            
            resolve("4");
          }, 400);
        });
      };
        
        function headE() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            
            chatHeader.classList.add("expanded");
            
            resolve("4");
          }, 800);
          
        });
      };
        
        
        
        function headXE() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            chatHeader.classList.add("expande");
            
            
            resolve("4");
          }, 500);
          
        });
      };
      
      
      
      
      function AreaE() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            chatArea.classList.add("expanded");
            
            
            resolve("4");
          }, 1000);
        });
      };



        
        
        AreaV().then(() => {
          headE().then(() => {
            headXE().then(() => {
              AreaE()
            });
          });
        })
        
        
        btn.innerHTML = "&#8593;";
        expanded = true;
      } 
      
      
      
      
      
      
      
      else {
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
    
    
    if (
    chatArea.style.backgroundColor === "transparent" ||
    chatArea.classList.contains("fullscreen")) {
    console.log("⚠️ Fold blocked: fullscreen mode active");
    return;
  }
    chatBox.classList.remove("expanded"); 
    
    function AreaE() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            chatArea.classList.add("expanded");
            console.log("steat");
            resolve("4");
          }, 500);
        });
      };
      
      
      
      
      function AreaXE() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            chatArea.classList.remove("expanded"); 
            
            resolve("4");
          }, 1000);
        });
      };
      
      
      
      
      
      function headE() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            chatHeader.classList.remove("expande");
            
            resolve("4");
          }, 1000);
        });
      };
      
      
      
      
      
      function AreaV() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            chatHeader.classList.add("expand");
            
            resolve("4");
          }, 1000);
        });
      };
    
    AreaE().then(() => {
      AreaXE().then(() => {
        headE().then(() => {
          AreaV()
        })
      })
    })
    
    
        
        
     
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
window.onload = () => {
  addMessage("Hi, how can I help you? ", "bot");
};





function getBotReply(msg) {
  const text = msg.toLowerCase().trim();
  
  if (text === "hi" || text === "hello" || text === "hay") {
    return "Hi, how are you?";
  }else if (text.includes("name") || text.includes("naam") || text.includes("kon")) {
    return "My name is AI assistant.";
    }else if (text.includes("namaste") ) {
    return "namaste main aapki kya madad kar sakta hun ?";
  } else if (text.includes("tum kya kar sakte ho") || text.includes("kya kar sakte ho") || text.includes("kar sakte ho") || text.includes("sakte ho")) {
    return "Main aapki madad calculation mein kar sakta hoon:\n- percentage nikalna eg:20% of 500 = 100\n- divide(/), multiply(*), add(+), subtract(-)\napp ko jo bhi calculation chahiye app use is tarah likh sakte hai\n•This is an Example\n20% of 500\n2 (+,-,*,/) 3";
  }
  
  // ✅ Check for proper percentage pattern: "25% of 400"
  if (text.includes('% of')) {
    const parts = text.split('% of');
    const percent = parseFloat(parts[0].trim());
    const number = parseFloat(parts[1].trim());
    if (!isNaN(percent) && !isNaN(number)) {
      const result = (percent / 100) * number;
      return `${percent}% of ${number} = ${result}`;
    } else {
      return "❗ Please enter valid format like '25% of 400'";
    }
  }
  
  // ❌ Reject wrong % format like "25% 500" (no 'of')
  if (text.includes('%')) {
    return "❌ Please use correct format: '25% of 500'";
  }
  
  // ✅ Basic Arithmetic Logic
  try {
    // Only allow safe math symbols
    const safeExpression = text.replace(/[^-()\d*/+.]/g, '');
    if (safeExpression) {
      const result = eval(safeExpression);
      return `Answer is: ${result}`;
    } else {
      return "Sorry, I couldn't understand that.";
    }
  } catch (err) {
    return "Sorry, I couldn't understand that.";
  }
}
















/*

const recognition = new webkitSpeechRecognition(); 
recognition.continuous = true; 
recognition.interimResults = false; 
recognition.lang = 'en-US';

let listeningForQuestion = false; // Initially not listening for math

recognition.onresult = function (event) { 
  const lastResult = event.results[event.results.length - 1]; 
  const speech = lastResult[0].transcript.trim().toLowerCase(); 
  console.log("🎤 Heard:", speech);

  if (!listeningForQuestion) { 
    // 👂 Waiting for wake word
    if (speech.includes("solve")) { 
      listeningForQuestion = true; 
      speakText("Listening your question");
    }
  } else {
    addMessage(speech, "user"); 
    const reply = getBotReply(speech); 
    
    setTimeout(() => { 
      addMessage(reply, "bot"); 
      speakText(reply); // 🔊 Yeh line add ki gayi hai taaki bot ka answer sunai de
    }, 600); 

    listeningForQuestion = false; // Reset 
  } 
};

recognition.onerror = (e) => { 
  console.log("🎤 Error:", e.error);
  recognition.stop(); 
  setTimeout(() => recognition.start(), 2000);
};

recognition.onend = () => { 
  console.log("🎤 Restarting recognition..."); 
  recognition.start(); 
};

function speakText(text) {
  const utter = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utter);
}

recognition.start();

*/





// ------------------- Combined: Your commands + Robust auto-restart -------------------

// If speakText not defined earlier, define a simple one (won't override if exists)
if (typeof speakText !== "function") {
  function speakText(text, onEnd = null) {
    const utter = new SpeechSynthesisUtterance(text);
    if (onEnd) utter.onend = onEnd;
    speechSynthesis.speak(utter);
  }
}

// (Optional) ensure addMessage/getBotReply exist in your file. They were part of your app.
// If they are not defined, you can keep them or remove talk to bot parts.

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// State + control flags
let recognition = null;
let isRecognizing = false;
let isStarting = false;
let retryCount = 0;
const MAX_RETRY = 6;
let listeningForQuestion = false;
let restartTimer = null;

// Create and wire recognition instance (use this whenever we need fresh instance)
function initRecognition() {
  // If an old instance exists, remove handlers and null it
  try {
    if (recognition) {
      recognition.onresult = null;
      recognition.onend = null;
      recognition.onerror = null;
      recognition.onstart = null;
    }
  } catch (e) { /* ignore */ }

  recognition = new window.SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.lang = 'en-US'; // keep your original language; change to 'hi-IN' if you want Hindi

  // ---------- RESULT HANDLER (your original command logic) ----------
  recognition.onresult = function (event) {
    const lastResult = event.results[event.results.length - 1];
    const speech = lastResult[0].transcript.trim().toLowerCase();
    console.log("🎤 Heard:", speech);

    // ---- "open" commands mapping ----
    if (speech.includes("open")) {
      let site = speech.replace("open", "").trim();
      const websites = {
        "google": "https://www.google.com",
        "youtube": "https://www.youtube.com",
        "instagram": "https://www.instagram.com",
        "snapchat": "https://www.snapchat.com",
        "facebook": "https://www.facebook.com",
        "twitter": "https://www.twitter.com",
        "whatsapp": "https://web.whatsapp.com"
      };
      site = site.replace("d ", "").trim();
      const url = websites[site];
      if (url) {
        speakText(`Opening ${site}`);
        // open new tab (this will shift focus away; script will restart when you come back)
        window.open(url, "_blank");
      } else {
        speakText(`Sorry, I can't find ${site}`);
      }
      return; // stop further processing for this result
    }

    // ---- "solve" flow (your original) ----
    if (!listeningForQuestion) {
      if (speech.includes("solve")) {
        listeningForQuestion = true;
        // waiting for the next spoken part with the question
      }
    } else {
      const cleanSpeech = speech.replace("solve", "").trim();
      try { addMessage(cleanSpeech, "user"); } catch (e) { /* if addMessage not defined, ignore */ }

      speakText("Solving " + cleanSpeech, () => {
        const reply = (typeof getBotReply === "function") ? getBotReply(cleanSpeech) : "Sorry, bot logic missing";
        setTimeout(() => {
          try { addMessage(reply, "bot"); } catch (e) {}
          speakText(reply);
        }, 600);
      });

      listeningForQuestion = false;
    }
  };

  // ---------- START / END / ERROR handlers for robust restart ----------
  recognition.onstart = function () {
    console.log("🎤 recognition.onstart");
    isRecognizing = true;
    isStarting = false;
    retryCount = 0;
  };

  recognition.onend = function () {
    console.log("🎤 recognition.onend (stopped)");
    isRecognizing = false;
    isStarting = false;
    // If page is active, schedule a restart (small delay avoids InvalidStateError)
    if (document.visibilityState === "visible" && document.hasFocus()) {
      clearTimeout(restartTimer);
      restartTimer = setTimeout(() => startRecognitionWithRetry(), 300);
    } else {
      console.log("Page not active — will restart when visible/focused.");
    }
  };

  recognition.onerror = function (e) {
    console.warn("🎤 recognition.onerror:", e && e.error ? e.error : e);
    isRecognizing = false;
    isStarting = false;

    // If permission blocked, inform and stop retrying
    if (e && (e.error === "not-allowed" || e.error === "service-not-allowed" || e.error === "permission-denied")) {
      console.error("Microphone permission denied. Please enable microphone permission for this site.");
      return;
    }

    // Try to abort and then restart with backoff
    try { recognition.abort(); } catch (_) { try { recognition.stop(); } catch (_) {} }
    if (retryCount < MAX_RETRY) {
      retryCount++;
      const backoff = Math.min(200 * Math.pow(2, retryCount), 3000);
      clearTimeout(restartTimer);
      restartTimer = setTimeout(() => startRecognitionWithRetry(), backoff);
    } else {
      console.warn("Max retry reached for starting recognition.");
    }
  };
}

// Safely start recognition with retry/backoff mechanism
function startRecognitionWithRetry() {
  if (isRecognizing || isStarting) return;
  isStarting = true;

  if (!recognition) initRecognition();

  try {
    recognition.start();
    // onstart will set flags
  } catch (err) {
    console.warn("start() threw:", err);
    // Recreate recognition and retry after backoff
    isStarting = false;
    recognition = null;
    if (retryCount < MAX_RETRY) {
      retryCount++;
      const backoff = Math.min(200 * Math.pow(2, retryCount), 3000);
      clearTimeout(restartTimer);
      restartTimer = setTimeout(() => {
        initRecognition();
        startRecognitionWithRetry();
      }, backoff);
    } else {
      console.error("Could not start recognition after retries.");
    }
  }
}

function stopRecognition() {
  try {
    if (recognition) {
      recognition.abort(); // prefer abort to cancel queued events cleanly
    }
  } catch (e) {
    try { recognition.stop(); } catch (e2) { /* ignore */ }
  }
  isRecognizing = false;
  isStarting = false;
}

// When page becomes visible or window focused, attempt to start
function handleActiveState() {
  if (document.visibilityState === "visible" && document.hasFocus()) {
    console.log("Page active — attempting to start recognition if not running.");
    startRecognitionWithRetry();
  } else {
    console.log("Page not active — stopping recognition (optional).");
    // Optional: stopRecognition(); // you can keep recognition stopped while user away
  }
}

// Bind events to restart when user returns
document.addEventListener("visibilitychange", handleActiveState);
window.addEventListener("focus", handleActiveState);
window.addEventListener("pageshow", handleActiveState);

// Start on initial load (best effort)
window.addEventListener("load", () => {
  initRecognition();
  startRecognitionWithRetry();
});

// Optional debugging helpers (you can remove if not needed)
window._voiceAssistantDebug = {
  start: startRecognitionWithRetry,
  stop: stopRecognition,
  status: () => ({ isRecognizing, isStarting, retryCount })
};
