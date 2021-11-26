import React from 'react';
import TextBox from './Textbox'
import IpApi from './IpApi'
import { useState } from 'react'
import "./bulma/bulma.sass";
import "./custom.css"

class Button extends React.Component {

  buttonClick(){
    window.open(this.props.link)
  }

  render(){
  return (
        <button onClick={this.buttonClick.bind(this)} className="button is-warning is-medium is-fullwidth">
            <h1 className="title is-3 has-text-black is-family-monospace">{this.props.text}</h1>
        </button>
  )};
}


class ButtonDisabled extends React.Component {
  render() {
    return (
      <button className="button is-warning is-medium is-fullwidth" disabled>
          <h1 className="title is-3 has-text-black is-family-monospace">{this.props.text}</h1>
      </button>
    )
  }
}

const AddTripButton = (props) => {
  return <button className="button is-warning is-medium is-fullwidth" onClick={props.addTrip}>
    <h1 className="title is-3 has-text-black is-family-monospace">{props.text}</h1>
    </button>
}


function Banner() {

  const [state, setState] = useState('start');

  var text = {
    "who-am-i": "Hey folks! I'm Koley. I wanted to learn React so here I am. I'll save you the boring corporate jargon. I actually do have a portfolio site under my real name (find me!) but this one is more ~spicy~. I graduated college a couple years back with a CS degree. I specialize in cybersecurity (red teaming and blue teaming), full-stack engineering, systems + infrastructure engineering, memes, anime, and vim. Welcome to the playground.",
    "who-are-u": "Oh boy.. don't freak out! Let's see how good your security is. If you consent to me doing basic things that other sites already do, please click the button below. If using Brave/Chrome you may need to disable trackers. Don't worry, you aren't important enough to track - I'm not saving anything.",
    "projects": "From memes to potentially cool stuff - take a peak 😎",
    "content": "YouTube content and guides coming in hot here.."
  };

  var ipData = <IpApi />;

  return (
    <section className="hero is-primary is-fullheight header-image">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-size-1 is-family-monospace">koley.wtf</h1>
          <div id="banner" className="bulma-overlay-mixin-parent">
              <div className="bulma-overlay-mixin">
                <div className="buttons">
                  {state === 'start' && (
                    <>
                    <AddTripButton addTrip={() => setState('add-trip-1') } text="Who am I?"/>
                    <AddTripButton addTrip={() => setState('add-trip-2') } text="Who are you?"/>
                    <AddTripButton addTrip={() => setState('add-trip-3') } text="Projects"/>
                    <AddTripButton addTrip={() => setState('add-trip-4') } text="Content"/>
                    <ButtonDisabled text="I'm tired"/>
                    </>
                  )}

                  {state === 'add-trip-1' && (
                    <>
                    <TextBox text={text['who-am-i']}/>
                    <AddTripButton addTrip={() => setState('start') } text="Back"/>
                    </>
                  )}

                  {state === 'add-trip-2' && (
                    <>
                    <TextBox text={text['who-are-u']}/>
                    <AddTripButton addTrip={() => setState('ip-checker') } text="I'm in - let's do it"/>
                    <AddTripButton addTrip={() => setState('start') } text="Back"/>
                    </>
                  )}

                  {state === 'add-trip-3' && (
                    <>
                    <TextBox text={text['projects']}/>
                    <Button link="https://theliveapp.co" text="The LIVE App"/>
                    <AddTripButton addTrip={() => setState('start') } text="Back"/>
                    </>
                  )}

                  {state === 'add-trip-4' && (
                    <>
                    <TextBox text={text['content']}/>
                    <AddTripButton addTrip={() => setState('start') } text="Back"/>
                    </>
                  )}

                  {state === 'ip-checker' && (
                    <>
                    <TextBox text={ipData}/>
                    <AddTripButton addTrip={() => setState('start') } text="Back"/>
                    </>
                  )}
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
