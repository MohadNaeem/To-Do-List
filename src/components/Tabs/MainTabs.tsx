import { useState } from 'react';
import { Tab, Tabs, Box } from '@mui/material';
import { TabPanel, TabList } from '@mui/lab';
import { TabContext } from '@mui/lab';
import DoneTasks from '../Routes/DoneTasks';
import ImportantTasks from '../Routes/ImportantTasks';
import Home from '../Routes/Home';




const MainTabs = () => {
    const [value, setValue] = useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return <>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, marginTop: 4, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="All Tasks" value="1" />
                    <Tab label="Important Tasks" value="2" />
                    <Tab label="Completed Tasks" value="3" />
                    <Tab label="Incompleted tasks" value="4" />
                </TabList>
            </Box>
            <TabPanel value="1"><Home /></TabPanel>
            <TabPanel value="2"><ImportantTasks /></TabPanel>
            <TabPanel value="3"><DoneTasks done={true} title="Completed tasks" /></TabPanel>
            <TabPanel value="4"><DoneTasks done={false} title="Uncompleted tasks" /></TabPanel>
        </TabContext>
    </>
}

export default MainTabs;
