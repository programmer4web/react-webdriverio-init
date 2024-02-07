import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {useState} from "react";

const EditableChip = () => {

    const [deleteVisible, setDeleteVisible] = useState(true);

    const handleDelete = () => {
        setDeleteVisible(false);
    };

    return (
        <Stack direction="row" spacing={1}>
            {deleteVisible && <Chip role="button" title="delete" label="Deletable" onDelete={handleDelete} />}
        </Stack>
    );
}

export default EditableChip;