## How to run this project

```sh
git clone https://github.com/muhammadhaekal/cash-denomination-calculator.git && cd cash-denomination-calculator
npm i
npm start
```

## List of technology

1. ReactJs
1. Babel
1. Webpack

## Test Case

| Number | Input       | Expected Output                         |
| :----: | ----------- | --------------------------------------- |
|   1    | 15000       | 1x10000, 1x5000                         |
|   2    | Rp3900      | 3x1000, 1x500, 4x100                    |
|   3    | 12510       | 1x10000, 2x1000, 1x500, 10-left         |
|   4    | 18.215      | 1x10000, 1x5000, 3x1000, 2x100, 15-left |
|   5    | Rp17500     | 1x10000, 1x5000, 2x1000, 1x500          |
|   6    | Rp17.500,00 | 1x10000, 1x5000, 2x1000, 1x500          |
|   7    | Rp 120.325  | 1x100000, 1x20000, 3x100, 25-left       |
|   8    | 005.000     | 1x5000                                  |
|   9    | 001000      | 1x1000                                  |
|   10   | 17,500      | invalid format                          |
|   11   | 2 500       | invalid format                          |
|   12   | 3000 Rp     | invalid format                          |
