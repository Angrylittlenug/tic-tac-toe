var script = document.createElement("script");
script.src = "functions.js";
document.head.appendChild(script);

const styleElement = document.createElement("style");
styleElement.innerHTML = `
.circular-progress {
    width: var(--progress-bar-width);
    height: var(--progress-bar-height);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inner-circle {
    position: absolute;
    width: calc(var(--progress-bar-width) - 30px);
    height: calc(var(--progress-bar-height) - 30px);
    border-radius: 50%;
    background-color: lightgrey;
  }
  
  .percentage {
    position: relative;
    font-size: var(--font-size);
    color: rgb(0, 0, 0, 0.8);
  }

  :root {
    --progress-bar-width: 200px;
    --progress-bar-height: 200px;
    --font-size: 2rem;
  }

  @media screen and (max-width: 800px) {
    :root {
      --progress-bar-width: 150px;
      --progress-bar-height: 150px;
      --font-size: 1.3rem;
    }
  }
  
  @media screen and (max-width: 500px) {
    :root {
      --progress-bar-width: 120px;
      --progress-bar-height: 120px;
      --font-size: 1rem;
    }
  }
`

const setProgress = (lock, percentage) => {
  const progressBar = document.getElementById("lock-" + lock)

  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(percentage.toFixed(0)),
    speed = 20,
    progressColor = progressBar.getAttribute("data-progress-color");


  const progress = setInterval(() => {
    startValue++;
    if (endValue == 100.0) {
      progressValue.textContent = `Atrakinta`;
    } else if (endValue == 0) {
      progressValue.textContent = `Pilnai užrakinta`;
    } else {
      progressValue.textContent = `${startValue}%`;
    }
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6
      }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue >= endValue) {
      clearInterval(progress);
      progressBar.style.background = `conic-gradient(${progressColor} ${endValue * 3.6
        }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    }
  }, speed);
}

document.getElementsByTagName("head").item(0).appendChild(styleElement)

document.getElementsByTagName("body").item(0).innerHTML = `
<div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background-color: red; display: flex; align-items: center; justify-content: center; color: white; flex-direction: column; text-align: center;">
<img src="img/bomb.png" width="150px" height="150px"/>

<div style="width: 50%">
<h1>Tavo svetainė buvo UŽMINUOTA</h1>
<p>Čia aš - Terabaitas. Tu manęs nenugalėsi. Sprogmuo užrakintas trimis neįveikiamais užraktais. Norint juos atrakinti reikia pabaigti rašyti funkcijas functions.js faile. TAU NIEKADA NEPAVYKS</p>

<iframe style="display: none;" id="video-1" width="560" height="315" src="https://www.youtube.com/embed/K85XYE6KdRE?si=G6MDandFwouEeqse&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe style="display: none;" id="video-2" width="560" height="315" src="https://www.youtube.com/embed/hZdQ90Xfl5M?si=YiNFinaCdRc11GwV&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe style="display: none;" id="video-3" width="560" height="315" src="https://www.youtube.com/embed/kG-wvjUgiUQ?si=_Q3YCPPUlBn2_qDU&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe style="display: none;" id="video-4" width="560" height="315" src="https://www.youtube.com/embed/Nt-RIFYgOi8?si=wd96WV834ljaCC15&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style="display: flex; flex-direction: row; width: 100%; gap: 50px; justify-content: center;">
    <div style="text-align: center;">
        <h2>Pirmas užraktas</h2>
            <div class="circular-progress" id="lock-1" data-inner-circle-color="lightgrey" data-progress-color="crimson" data-bg-color="black">
            <div class="inner-circle"></div>
                 <p class="percentage">10%</p>
            </div>
    </div>
    <div style="text-align: center;">
        <h2>Antras užraktas</h2>
            <div class="circular-progress" id="lock-2" data-inner-circle-color="lightgrey" data-progress-color="orange" data-bg-color="black">
                    <div class="inner-circle"></div>
                <p class="percentage">10%</p>
            </div>
    </div>
    <div style="text-align: center;">
    <h2>Trečias užraktas</h2>
        <div class="circular-progress" id="lock-3" data-inner-circle-color="lightgrey" data-progress-color="green" data-bg-color="black">
                <div class="inner-circle"></div>
            <p class="percentage">10%</p>
        </div>
</div>
</div>
</div>
</div>
`

const unlocked = [false, false, false]

window.onload = () => {
  {
    let numPassed = 0.0;
    if (playGame("zirkles") == "akmuo") {
      numPassed++
    }
    if (playGame("lapas") == "zirkles") {
      numPassed++
    }
    if (playGame("akmuo") == "lapas") {
      numPassed++
    }
    if (playGame("zirklEs") == "akmuo") {
      numPassed++
    }
    if (playGame("lapAs") == "zirkles") {
      numPassed++
    }
    if (playGame("akmuO") == "lapas") {
      numPassed++
    }
    if (numPassed == 6) {
      unlocked[0] = true
    }
    setProgress(1, (numPassed / 6.0) * 100)
  }
  {
    let numPassed = 0.0;
    if (calculateCandy(1, 0) == 0) {
      numPassed++
    }
    if (calculateCandy(3, 3) == 1) {
      numPassed++
    }
    if (calculateCandy(4, 3) == 0) {
      numPassed++
    }
    if (calculateCandy(2, 3) == 1) {
      numPassed++
    }
    if (calculateCandy(5, 0) == 0) {
      numPassed++
    }
    if (calculateCandy(0, 7) == 0) {
      numPassed++
    }
    if (numPassed == 6) {
      unlocked[1] = true
    }
    setProgress(2, (numPassed / 6.0) * 100)
  }
  {
    let numPassed = 0.0;
    if (getNextInSeries(0) == 1) {
      numPassed++
    }
    if (getNextInSeries(1) == 2) {
      numPassed++
    }
    if (getNextInSeries(20) == 10946) {
      numPassed++
    }
    if (numPassed == 3) {
      unlocked[2] = true
    }
    setProgress(3, (numPassed / 3.0) * 100)
  }

  if (unlocked[2]) {
    document.getElementById("video-4").style.display = "block"
  } else if (unlocked[1]) {
    document.getElementById("video-3").style.display = "block"
  } else if (unlocked[0]) {
    document.getElementById("video-2").style.display = "block"
  } else {
    document.getElementById("video-1").style.display = "block"
  }
}

// https://youtu.be/K85XYE6KdRE