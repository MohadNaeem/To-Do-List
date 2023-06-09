import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Task } from "../../interfaces";
import ActionsTaskItem from '../TasksSection/TaskItem/ActionsTaskItem';
import Paper from '@mui/material/Paper';
import BtnToggleCompleted from '../TasksSection/TaskItem/BtnToggleCompleted';;

interface Props {
    tasks: Task[];
}

export default function TaskTable(props: Props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ width: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell >Completion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.tasks.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell> {<BtnToggleCompleted
                                taskCompleted={row.completed}
                                taskId={row.id}
                                isListInView1={true}
                            />}</TableCell>
                            <TableCell>{<ActionsTaskItem task={row} isListInView1={true} />}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}