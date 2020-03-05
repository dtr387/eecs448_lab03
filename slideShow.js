document.addEventListener("DOMContentLoaded", () => {
  let theImage = document.querySelector("#theImage");
  let previous = document.querySelector("#previous");
  let next = document.querySelector("#next");
  let counter = document.querySelector("#counter");
  let numcount = 1;
  theImage.src = "git.png";
  counter.innerText = "1/5"
  previous.addEventListener("click", () => {
    if(numcount % 5 == 1)
    {
      theImage.src = "exploits_of_a_mom.png";
      counter.innerText = "5/5"
    }
    else if(numcount % 5 == 2)
    {
      theImage.src = "git.png";
      counter.innerText = "1/5"
    }
    else if(numcount % 5 == 3)
    {
      theImage.src = "compiling.png";
      counter.innerText = "2/5"
    }
    else if (numcount % 5 == 4)
    {
      theImage.src = "ballmer_peak.png";
      counter.innerText = "3/5"
    }
    else
    {
      theImage.src = "code_quality.png";
      counter.innerText = "4/5"
      numcount = 5;
    }
    numcount--;
  })
next.addEventListener("click", () => {
    if(numcount % 5 == 4)
    {
      theImage.src = "exploits_of_a_mom.png";
      counter.innerText = "5/5"
    }
    else if(numcount % 5 == 0)
    {
      theImage.src = "git.png";
      counter.innerText = "1/5"
    }
    else if(numcount % 5 == 1)
    {
      theImage.src = "compiling.png";
      counter.innerText = "2/5"
    }
    else if (numcount % 5 == 2)
    {
      theImage.src = "ballmer_peak.png";
      counter.innerText = "3/5"
    }
    else
    {
      theImage.src = "code_quality.png";
      counter.innerText = "4/5"
    }
    numcount++;
  })
})
