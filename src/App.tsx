import { useEffect, useState } from "react";
import "./App.css";
import { Diffculty, getDisplayName } from "./models/number.model";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, MenuItem, Select, TextField } from "@material-ui/core";

function App() {
  const classes = useStyles();

  const [diffculter, setDifficulter] = useState<Diffculty>(Diffculty.facile);
  const [vie, setVie] = useState<number>(10);
  const [points, setPoints] = useState<number>(0);
  const [nbparti, setNbParti] = useState<number>(1);
  const [essaie, setEssaie] = useState<any>("");
  const [precPartieCourante, setPrecPartieCourante] = useState<string[]>([]);
  const [toHigh, setToHigh] = useState<boolean>(false);
  const [toLow, setToLow] = useState<boolean>(false);
  const [win, setwin] = useState<boolean>(false);
  const [lose, setLose] = useState<boolean>(false);
  const [PointPrec, setPointPrecedent] = useState<number>(0);

  function getRandomInt() {
    let min: number = 1;
    let max: number = +diffculter;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const [objectif, setObjectif] = useState<number>(getRandomInt());

  const handleChangeDifficulty = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    const value: any = e.target.value;
    setDifficulter(value);
  };

  const handleChangeEssaie = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    const value: any = e.target.value;
    setEssaie(+value);
  };
  const handleAddPrec = (ess: string) => {
    const newtab: string[] = precPartieCourante.concat([ess]);
    setPrecPartieCourante(newtab);
  };
  const jouer = () => {
    if (essaie !== "") {
      if (vie >= 1) {
        if (vie > 1) {
          handleAddPrec(essaie + ", ");
        } else {
          handleAddPrec(essaie + ".");
        }

        if (+essaie < +objectif) {
          setToLow(true);
          setToHigh(false);
          setEssaie("");
          setVie(vie - 1);
        }
        if (+essaie > +objectif) {
          setToHigh(true);
          setToLow(false);
          setEssaie("");
          setVie(vie - 1);
        }
        if (+essaie === +objectif) {
          setPoints(vie * +diffculter);
          setToHigh(false);
          setToLow(false);
          setwin(true);
        }
      } else {
        setPoints(0);
        setLose(true);
      }
    }
  };

  const handleReset = () => {
    setNbParti(nbparti + 1);
    setVie(10);
    setPoints(0);
    setEssaie("");
    setPrecPartieCourante([]);
    setObjectif(getRandomInt());
    setwin(false);
    setToHigh(false);
    setToLow(false);
    setLose(false);
  };

  const handleResetHARD = () => {
    setNbParti(0);
    setVie(10);
    setPoints(0);
    setEssaie("");
    setPrecPartieCourante([]);
    setObjectif(getRandomInt());
    setwin(false);
    setToHigh(false);
    setToLow(false);
    setLose(false);
  };
  const handleStop = () => {
    setNbParti(nbparti + 1);
    setVie(10);
    setPoints(0);
    setPointPrecedent(points);
    setEssaie("");
    setPrecPartieCourante([]);
    setObjectif(getRandomInt());
    setwin(false);
    setToHigh(false);
    setToLow(false);
    setLose(false);
  };

  const handleContinuer = () => {
    setNbParti(nbparti + 1);
    setVie(10);
    setPoints(points);
    setEssaie("");
    setPrecPartieCourante([]);
    setObjectif(getRandomInt());
    setwin(false);
    setToHigh(false);
    setToLow(false);
    setLose(false);
  };

  useEffect(() => {
    handleReset();
  }, [diffculter]);
  return (
    <div className="App">
      <h1>Number guessing game</h1>
      <Typography>
        We have selected a random number. See if you can guess beteween 1 and{" "}
        {diffculter}
      </Typography>
      {nbparti > 1 ? (
        <Typography>C'est votre {nbparti}éme partie d'affilé !</Typography>
      ) : (
        <> </>
      )}
      {nbparti > 1 ? (
        <Typography>Nb point précedent {PointPrec} !</Typography>
      ) : (
        <> </>
      )}
      <Typography>Nb de points : {points}</Typography>
      <Typography>Nombre de vie restante : {vie}</Typography>
      <Typography>Vos try : {precPartieCourante}</Typography>

      <Select
        variant="outlined"
        style={{ marginTop: "5px", marginBottom: "5px" }}
        label="diffculter"
        id="diffculter"
        name="diffculter"
        value={diffculter}
        className="text"
        onChange={(e) => handleChangeDifficulty(e)}
      >
        {Object.values(Diffculty).map((value: any) => {
          return (
            <MenuItem key={value} value={value}>
              {getDisplayName(value)}
            </MenuItem>
          );
        })}
      </Select>
      <div className={classes.btn}>
        <TextField
          variant="outlined"
          type="number"
          style={{ backgroundColor: "white", marginRight: "10px" }}
          id="essaie"
          InputProps={{
            inputProps: {
              max: +diffculter,
              min: 1,
            },
          }}
          onKeyPress={(ev) => {
            console.log(`Pressed keyCode ${ev.key}`);
            if (ev.key === "Enter") {
              jouer();
              ev.preventDefault();
            }
          }}
          value={essaie}
          onChange={(e) => handleChangeEssaie(e)}
        ></TextField>
        <Button
          onClick={() => {
            jouer();
          }}
          disabled={vie < 1 || win || lose}
          style={{ backgroundColor: "white" }}
        >
          TRY
        </Button>
      </div>
      {toLow ? (
        <Typography style={{ color: "blue",fontSize:"24px" }}>trop bas </Typography>
      ) : (
        <> </>
      )}
      {toHigh ? (
        <Typography style={{ color: "yellow",fontSize:"24px" }}>trop haut </Typography>
      ) : (
        <> </>
      )}
      {win ? (
        <Typography style={{ color: "green",fontSize:"24px" }}>c gagné  </Typography>
      ) : (
        <> </>
      )}
      {lose ? (
        <Typography style={{ color: "red",fontSize:"24px" }}>c perdu </Typography>
      ) : (
        <> </>
      )}
      {lose ? (
        <Button
          onClick={() => {
            handleReset();
          }}
          style={{ backgroundColor: "white" }}
        >
          Recommencer ?
        </Button>
      ) : (
        <> </>
      )}
      {win ? (
        <Button
          onClick={() => {
            handleStop();
          }}
          style={{ backgroundColor: "white" }}
        >
          Stop ?
        </Button>
      ) : (
        <> </>
      )}
      {win ? (
        <Button
          onClick={() => {
            handleContinuer();
          }}
          style={{ backgroundColor: "white" }}
        >
          Continuer ?
        </Button>
      ) : (
        <> </>
      )}

      {nbparti > 1 ? (
        <Button
          className={classes.bottom}
          onClick={() => {
            handleResetHARD();
          }}
          style={{ backgroundColor: "white" }}
        >
          RESET HARD ?
        </Button>
      ) : (
        <> </>
      )}
    </div>
  );
}

export default App;

const useStyles = makeStyles(() => ({
  btn: {
    alignItems: "center",
    display: "flex",
    margin: "2%",
  },
  submit: {
    fontSize: "40px",
  },
  bottom: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
}));
