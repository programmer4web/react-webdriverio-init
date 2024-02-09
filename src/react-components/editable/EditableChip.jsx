import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {useState} from "react";
import {TextField} from "@mui/material";

const EditableChip = () => {

    const [chipVisible, setChipVisible] = useState(true);
    const [textFieldVisible, setTextFieldVisible] = useState(false);
    const [text, setText] = useState('Romania');
    const [label, setLabel] = useState('Romania');

    const handleClick = () => {
        setTextFieldVisible(true);
        setLabel('');
    }

    const handleTextFieldBlur = () => {
        setLabel(text);
        setTextFieldVisible(false);
    }

    const handleDelete = () => {
        setChipVisible(false);
        setTextFieldVisible(false);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    return (
        <Stack direction="row" spacing={1}>
            <div className="editable-chip" style={{ position: 'relative' }}>
                {chipVisible && <Chip role="button"
                                      style={{ minWidth: '160px' }}
                                      sx={{
                                          '& .MuiChip-label': {
                                            minWidth: '100px'
                                          },
                                          '& .MuiChip-deleteIcon': {
                                          },
                                      }}
                                      name="Romania"
                                      title="Romania"
                                      label={label}
                                      onClick={handleClick}
                                      onDelete={handleDelete} />
                }
                {textFieldVisible && <TextField data-testid="chip-text"
                                                style={{ position: 'absolute', left: '16px', width: '128px', }}
                                                sx={{
                                                    '& .MuiInputBase-input': {
                                                        fontSize: '14px',
                                                        marginTop: '2px'
                                                    }
                                                }}
                                                variant="standard"
                                                value={text}
                                                onChange={handleTextChange}
                                                onBlur={handleTextFieldBlur}/>
                }
            </div>
        </Stack>
    );
}

export default EditableChip;