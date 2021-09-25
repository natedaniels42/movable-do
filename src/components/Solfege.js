import '../App.css';

const Solfege = (props) => {
    const { current } = props;

    const handleClick = ({ target }) => {
        new Audio(current.solfege[target.id].note).play();
    }

    return (
        <div id="solfege-box">
            <div onClick={handleClick} className="syllable" id="do"><h2 id="do">Do</h2><h3 id="do">{current.solfege.do.name}</h3></div>
            <div onClick={handleClick} className="syllable" id="re"><h2 id="re">Re</h2><h3 id="re">{current.solfege.re.name}</h3></div>
            <div onClick={handleClick} className="syllable" id="mi"><h2 id="mi">Mi</h2><h3 id="mi">{current.solfege.mi.name}</h3></div>
            <div onClick={handleClick} className="syllable" id="fa"><h2 id="fa">Fa</h2><h3 id="fa">{current.solfege.fa.name}</h3></div>
            <div onClick={handleClick} className="syllable" id="sol"><h2 id="sol">Sol</h2><h3 id="sol">{current.solfege.sol.name}</h3></div>
            <div onClick={handleClick} className="syllable" id="la"><h2 id="la">La</h2><h3 id="la">{current.solfege.la.name}</h3></div>
            <div onClick={handleClick} className="syllable" id="ti"><h2 id="ti">Ti</h2><h3 id="ti">{current.solfege.ti.name}</h3></div>
            <div onClick={handleClick} className="syllable" id="do2"><h2 id="do2">Do</h2><h3 id="do2">{current.solfege.do2.name}</h3></div>
        </div>
    )
}

export default Solfege;