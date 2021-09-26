import React, { useState } from 'react';
import '../App.css';

const Solfege = (props) => {
    const [scale, setScale] = useState('major');
    const { current } = props;

    const handleClick = ({ target }) => {
        new Audio(current.solfege.notes[target.id]).play();
    }

    const handleChange = ({ target }) => {
        setScale(target.value);
    }

    return (
        <div>
            <div>
                <label htmlFor="scale">Choose Scale:</label>
                <select name="scale" id="scale" onChange={handleChange}>
                    <option value="major">Major</option>
                    <option value="natural-minor">Natural Minor</option>
                    <option value="harmonic-minor">Harmonic Minor</option>
                    <option value="melodic-minor">Melodic Minor</option>
                </select>
            </div>
            <div id="solfege-box">
                {scale === 'major' && (
                    <React.Fragment>
                        <div onClick={handleClick} className="syllable" id="do"><h2 id="do">Do</h2><h3 id="do">{current.solfege.major.do.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="re"><h2 id="re">Re</h2><h3 id="re">{current.solfege.major.re.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="mi"><h2 id="mi">Mi</h2><h3 id="mi">{current.solfege.major.mi.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="fa"><h2 id="fa">Fa</h2><h3 id="fa">{current.solfege.major.fa.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="sol"><h2 id="sol">Sol</h2><h3 id="sol">{current.solfege.major.sol.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="la"><h2 id="la">La</h2><h3 id="la">{current.solfege.major.la.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="ti"><h2 id="ti">Ti</h2><h3 id="ti">{current.solfege.major.ti.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="do2"><h2 id="do2">Do</h2><h3 id="do2">{current.solfege.major.do2.name}</h3></div>
                    </React.Fragment>
                )}
                {scale === 'natural-minor' && (
                    <React.Fragment>
                        <div onClick={handleClick} className="syllable" id="do"><h2 id="do">Do</h2><h3 id="do">{current.solfege.minor.natural.do.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="re"><h2 id="re">Re</h2><h3 id="re">{current.solfege.minor.natural.re.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="me"><h2 id="me">Me</h2><h3 id="me">{current.solfege.minor.natural.me.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="fa"><h2 id="fa">Fa</h2><h3 id="fa">{current.solfege.minor.natural.fa.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="sol"><h2 id="sol">Sol</h2><h3 id="sol">{current.solfege.minor.natural.sol.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="le"><h2 id="le">Le</h2><h3 id="le">{current.solfege.minor.natural.le.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="ta"><h2 id="ta">Ta</h2><h3 id="ta">{current.solfege.minor.natural.ta.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="do2"><h2 id="do2">Do</h2><h3 id="do2">{current.solfege.minor.natural.do2.name}</h3></div>
                    </React.Fragment>
                )}
                {scale === 'harmonic-minor' && (
                    <React.Fragment>
                        <div onClick={handleClick} className="syllable" id="do"><h2 id="do">Do</h2><h3 id="do">{current.solfege.minor.harmonic.do.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="re"><h2 id="re">Re</h2><h3 id="re">{current.solfege.minor.harmonic.re.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="me"><h2 id="me">Me</h2><h3 id="me">{current.solfege.minor.harmonic.me.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="fa"><h2 id="fa">Fa</h2><h3 id="fa">{current.solfege.minor.harmonic.fa.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="sol"><h2 id="sol">Sol</h2><h3 id="sol">{current.solfege.minor.harmonic.sol.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="le"><h2 id="le">Le</h2><h3 id="le">{current.solfege.minor.harmonic.le.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="ti"><h2 id="ti">Ti</h2><h3 id="ti">{current.solfege.minor.harmonic.ti.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="do2"><h2 id="do2">Do</h2><h3 id="do2">{current.solfege.minor.harmonic.do2.name}</h3></div>
                    </React.Fragment>
                )}
                {scale === 'melodic-minor' && (
                    <React.Fragment>
                        <div onClick={handleClick} className="syllable" id="do"><h2 id="do">Do</h2><h3 id="do">{current.solfege.minor.melodic.do.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="re"><h2 id="re">Re</h2><h3 id="re">{current.solfege.minor.melodic.re.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="me"><h2 id="me">Me</h2><h3 id="me">{current.solfege.minor.melodic.me.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="fa"><h2 id="fa">Fa</h2><h3 id="fa">{current.solfege.minor.melodic.fa.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="sol"><h2 id="sol">Sol</h2><h3 id="sol">{current.solfege.minor.melodic.sol.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="la"><h2 id="la">La</h2><h3 id="la">{current.solfege.minor.melodic.la.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="ti"><h2 id="ti">Ti</h2><h3 id="ti">{current.solfege.minor.melodic.ti.name}</h3></div>
                        <div onClick={handleClick} className="syllable" id="do2"><h2 id="do2">Do</h2><h3 id="do2">{current.solfege.minor.melodic.do2.name}</h3></div>
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}

export default Solfege;