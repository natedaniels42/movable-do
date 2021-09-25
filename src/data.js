const keys = [
    {
        id: 'c-key',
        name: 'C',
        note: 'c3.m4a',
        solfege: {
            do: {
                name: 'C',
                note: 'c3.m4a'
            },
            re: {
                name: 'D',
                note: 'd3.m4a'
            },
            mi: {
                name: 'E',
                note: 'e3.m4a'
            },
            fa: {
                name: 'F',
                note: 'f3.m4a'
            },
            sol: {
                name: 'G',
                note: 'g3.m4a'
            },
            la: {
                name: 'A',
                note: 'a3.m4a'
            },
            ti: {
                name: 'B',
                note: 'b3.m4a'
            },
            do2: {
                name: 'C',
                note: 'c4.m4a'
            }
        }
    },
    {
        id: 'd-flat-key',
        name: 'C\u266F/D\u266D',
        note: 'dflat3.m4a',
        solfege: {
            do: {
                name: 'C\u266F/D\u266D',
                note: 'dflat3.m4a'
            },
            re: {
                name: 'D\u266F/E\u266D',
                note: 'eflat3.m4a'
            },
            mi: {
                name: 'E\u266F/F',
                note: 'f3.m4a'
            },
            fa: {
                name: 'F\u266F/G\u266D',
                note: 'gflat3.m4a'
            },
            sol: {
                name: 'G\u266F/A\u266D',
                note: 'aflat3.m4a'
            },
            la: {
                name: 'A\u266F/B\u266D',
                note: 'bflat3.m4a'
            },
            ti: {
                name: 'B\u266F/C',
                note: 'c4.m4a'
            },
            do2: {
                name: 'C\u266F/D\u266D',
                note: 'dflat4.m4a'
            }
        }
    },
    {
        id: 'd-key',
        name: 'D',
        note: 'd3.m4a',
        solfege: {
            do: {
                name: 'D',
                note: 'd3.m4a'
            },
            re: {
                name: 'E',
                note: 'e3.m4a'
            },
            mi: {
                name: 'F\u266F',
                note: 'gflat3.m4a'
            },
            fa: {
                name: 'G',
                note: 'g3.m4a'
            },
            sol: {
                name: 'A',
                note: 'a3.m4a'
            },
            la: {
                name: 'B',
                note: 'b3.m4a'
            },
            ti: {
                name: 'C\u266F',
                note: 'dflat4.m4a'
            },
            do2: {
                name: 'D',
                note: 'd4.m4a'
            }
        }
    },
    {
        id: 'e-flat-key',
        name: 'E\u266D',
        note: 'eflat3.m4a',
        solfege: {
            do: {
                name: 'E\u266D',
                note: 'eflat3.m4a'
            },
            re: {
                name: 'F',
                note: 'f3.m4a'
            },
            mi: {
                name: 'G',
                note: 'g3.m4a'
            },
            fa: {
                name: 'A\u266D',
                note: 'aflat3.m4a'
            },
            sol: {
                name: 'B\u266D',
                note: 'bflat3.m4a'
            },
            la: {
                name: 'C',
                note: 'c4.m4a'
            },
            ti: {
                name: 'D',
                note: 'd4.m4a'
            },
            do2: {
                name: 'E\u266D',
                note: 'eflat4.m4a'
            }
        }
    },
    {
        id: 'e-key',
        name: 'E',
        note: 'e3.m4a',
        solfege: {
            do: {
                name: 'E',
                note: 'e3.m4a'
            },
            re: {
                name: 'F\u266F',
                note: 'gflat3.m4a'
            },
            mi: {
                name: 'G\u266F',
                note: 'aflat3.m4a'
            },
            fa: {
                name: 'A',
                note: 'a3.m4a'
            },
            sol: {
                name: 'B',
                note: 'b3.m4a'
            },
            la: {
                name: 'C\u266F',
                note: 'dflat4.m4a'
            },
            ti: {
                name: 'D\u266F',
                note: 'eflat4.m4a'
            },
            do2: {
                name: 'E',
                note: 'e4.m4a'
            }
        }
    },
    {
        id: 'f-key',
        name: 'F',
        note: 'f3.m4a',
        solfege: {
            do: {
                name: 'F',
                note: 'f3.m4a'
            },
            re: {
                name: 'G',
                note: 'g3.m4a'
            },
            mi: {
                name: 'A',
                note: 'a3.m4a'
            },
            fa: {
                name: 'B\u266D',
                note: 'bflat3.m4a'
            },
            sol: {
                name: 'C',
                note: 'c4.m4a'
            },
            la: {
                name: 'D',
                note: 'd4.m4a'
            },
            ti: {
                name: 'E',
                note: 'e4.m4a'
            },
            do2: {
                name: 'F',
                note: 'f4.m4a'
            }
        }
    },
    {
        id: 'g-flat-key',
        name: 'F\u266F/G\u266D',
        note: 'gflat3.m4a',
        solfege: {
            do: {
                name: 'F\u266F/G\u266D',
                note: 'gflat3.m4a'
            },
            re: {
                name: 'G\u266F/A\u266D',
                note: 'aflat3.m4a'
            },
            mi: {
                name: 'A\u266F/B\u266D',
                note: 'bflat3.m4a'
            },
            fa: {
                name: 'B/C\u266D',
                note: 'b3.m4a'
            },
            sol: {
                name: 'C\u266F/D\u266D',
                note: 'dflat4.m4a'
            },
            la: {
                name: 'D\u266F/E\u266D',
                note: 'eflat4.m4a'
            },
            ti: {
                name: 'E\u266F/F',
                note: 'f4.m4a'
            },
            do2: {
                name: 'F\u266F/G\u266D',
                note: 'gflat4.m4a'
            }
        }
    },
    {
        id: 'g-key',
        name: 'G',
        note: 'g3.m4a',
        solfege: {
            do: {
                name: 'G',
                note: 'g3.m4a'
            },
            re: {
                name: 'A',
                note: 'a3.m4a'
            },
            mi: {
                name: 'B',
                note: 'b3.m4a'
            },
            fa: {
                name: 'C',
                note: 'c4.m4a'
            },
            sol: {
                name: 'D',
                note: 'd4.m4a'
            },
            la: {
                name: 'E',
                note: 'e4.m4a'
            },
            ti: {
                name: 'F\u266F',
                note: 'gflat4.m4a'
            },
            do2: {
                name: 'G',
                note: 'g4.m4a'
            }
        }
    },
    {
        id: 'a-flat-key',
        name: 'A\u266D',
        note: 'aflat3.m4a',
        solfege: {
            do: {
                name: 'A\u266D',
                note: 'aflat3.m4a'
            },
            re: {
                name: 'B\u266D',
                note: 'bflat3.m4a'
            },
            mi: {
                name: 'C',
                note: 'c4.m4a'
            },
            fa: {
                name: 'D\u266D',
                note: 'dflat4.m4a'
            },
            sol: {
                name: 'E\u266D',
                note: 'eflat4.m4a'
            },
            la: {
                name: 'F',
                note: 'f4.m4a'
            },
            ti: {
                name: 'G',
                note: 'g4.m4a'
            },
            do2: {
                name: 'A\u266D',
                note: 'aflat4.m4a'
            }
        }
    },
    {
        id: 'a-key',
        name: 'A',
        note: 'a3.m4a',
        solfege: {
            do: {
                name: 'A',
                note: 'a3.m4a'
            },
            re: {
                name: 'B',
                note: 'b3.m4a'
            },
            mi: {
                name: 'C\u266F',
                note: 'dflat4.m4a'
            },
            fa: {
                name: 'D',
                note: 'd4.m4a'
            },
            sol: {
                name: 'E',
                note: 'e4.m4a'
            },
            la: {
                name: 'F\u266F',
                note: 'gflat4.m4a'
            },
            ti: {
                name: 'G\u266F',
                note: 'aflat4.m4a'
            },
            do2: {
                name: 'A',
                note: 'a4.m4a'
            }
        }
    },
    {
        id: 'b-flat-key',
        name: 'B\u266D',
        note: 'bflat3.m4a',
        solfege: {
            do: {
                name: 'B\u266D',
                note: 'bflat3.m4a'
            },
            re: {
                name: 'C',
                note: 'c4.m4a'
            },
            mi: {
                name: 'D',
                note: 'd4.m4a'
            },
            fa: {
                name: 'E\u266D',
                note: 'eflat4.m4a'
            },
            sol: {
                name: 'F',
                note: 'f4.m4a'
            },
            la: {
                name: 'G',
                note: 'g4.m4a'
            },
            ti: {
                name: 'A',
                note: 'a4.m4a'
            },
            do2: {
                name: 'B\u266D',
                note: 'bflat4.m4a'
            }
        }
    },
    {
        id: 'b-key',
        name: 'B/C\u266D',
        note: 'b3.m4a',
        solfege: {
            do: {
                name: 'B/C\u266D',
                note: 'b3.m4a'
            },
            re: {
                name: 'C\u266F/D\u266D',
                note: 'dflat4.m4a'
            },
            mi: {
                name: 'D\u266F/E\u266D',
                note: 'eflat4.m4a'
            },
            fa: {
                name: 'E/F\u266D',
                note: 'e4.m4a'
            },
            sol: {
                name: 'F\u266F/G\u266D',
                note: 'gflat4.m4a'
            },
            la: {
                name: 'G\u266F/A\u266D',
                note: 'aflat4.m4a'
            },
            ti: {
                name: 'A\u266F/B\u266D',
                note: 'bflat4.m4a'
            },
            do2: {
                name: 'B/C\u266D',
                note: 'b4.m4a'
            }
        }
    }
]