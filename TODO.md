TODOS and Ideas™

- id and/or namespace all UI nodes
- buttons as ui nodes
- show time per unit
- replace markup onclick with (genrated) bindings

## refactor and split

- split conf, state, deduced_values

- sync view names and visibility on setting classes

- update state 
    => update deduced values
    => renderDom
    => persist state


- "populate"
    => read localstorage
        => update state
    OR
    => pull defaults
        => update state

- pause timer
    => get and store timer state



---

- lockblocker w/ video


- scripts: mkdir -p test/features

- checking for updates indicator

- visualize timer progress


- post-css generated styleguide

- do it in angular
- do it in react


- show reload button only in fullscreen

- jade --obj data.json



if(window.navigator.standalone == true) {
  // My app is installed and therefore fullscreen
}

selector:-webkit-full-screen {
  display: block; // displays the element only when in fullscreen
}

selector:-moz-full-screen {
  display: block; // hides the element when not in fullscreen mode
}

selector:-ms-fullscreen {
  display: block;
}

selector {
  display: none; // hides the element when not in fullscreen mode
}



# DONE

- view state via model @done
- state to localstorage @done
- spike cucumber tests @done