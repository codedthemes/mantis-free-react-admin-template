import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid, Container, Paper } from '@mui/material';
import { blueGrey, red, blue } from '@mui/material/colors';


function Calculator() {
  const [input, setInput] = useState('');
  const [previousInput, setPreviousInput] = useState('');
  const [operator, setOperator] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch(event.key) {
        case '0': 
        case '1': 
        case '2': 
        case '3': 
        case '4': 
        case '5': 
        case '6': 
        case '7': 
        case '8': 
        case '9':
        case '.':
          handleInput(event.key);
          break;
        case '+':
        case '-':
        case '*':
        case '/':
          handleOperator(event.key);
          break;
        case 'Enter':
          calculate();
          break;
        case 'Escape':
          clear();
          break;
        default:
          break;
      }
    };

    // 添加键盘事件监听器
    document.addEventListener('keydown', handleKeyDown);

    // 组件卸载时移除监听器
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [input, operator, previousInput]);  // 依赖列表中添加必要的依赖
  
  const handleInput = (digit) => {
    setInput(input + digit);
  };

  const handleOperator = (op) => {
    if (input) {
      setPreviousInput(input);
      setOperator(op);
      setInput('');
    }
  };

  const calculate = () => {
    if (!operator || !input || !previousInput) return;
    try {
      const result = eval(`${previousInput}${operator}${input}`);
      setInput(String(result));
    } catch (error) {
      setInput("Error");
    }
    setPreviousInput('');
    setOperator(null);
  };

  const clear = () => {
    setInput('');
    setPreviousInput('');
    setOperator(null);
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <TextField fullWidth value={input} variant="outlined" InputProps={{
          readOnly: true,
        }} />
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=', '/'].map(key => (
            <Grid item xs={3} key={key}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: key === '=' ? blue[500] : blueGrey[500],
                  '&:hover': {
                    backgroundColor: key === '=' ? blue[700] : blueGrey[700]
                  },
                  height: 60,
                  width: 230,
                  fontSize: '20px',
                }}
                fullWidth
                onClick={key === '=' ? calculate : key === 'C' ? clear : key.match(/[0-9.]|\=/) ? () => handleInput(key) : () => handleOperator(key)}
              >
                {key}
              </Button>

            </Grid>
          ))}
          <Grid item xs={3}>
            <Button 
              variant="contained"  
              sx={{ backgroundColor: red[500], 
                '&:hover': { backgroundColor: red[700] },
                height: 60,
                width: 230,
                fontSize: '20px',
               }} 
              fullWidth 
              onClick={clear}
            >C</Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Calculator;
