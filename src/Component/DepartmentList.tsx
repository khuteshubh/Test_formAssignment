import React, {  useState } from 'react';
import {List,ListItem,ListItemButton,ListItemText,Collapse,ListSubheader,Checkbox,ListItemIcon} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import "./DepartmentList.css";





interface SubDepartment {
    name: string;
}
  
interface Department {
    name: string;
    subDepartments: SubDepartment[];
}
  
const DepartmentList: React.FC<{ departments: Department[] }> = ({ departments }) => {
    const [expanded, setExpanded] = useState<string[]>([]);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    

    
    
  
    const handleToggle = (e: any) =>   {
        let newSelected: string[] = [];
        
    const {name } = e.target;
    const selectedIndex = selectedItems.indexOf(name);

        
    if (selectedIndex === -1) {
        
        newSelected = newSelected.concat(selectedItems,name);
    }
    else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selectedItems.slice(1));
    }
    else if (selectedIndex === selectedItems.length - 1) {
        newSelected = newSelected.concat(selectedItems.slice(0, -1));
    }
    else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
            selectedItems.slice(0, selectedIndex),
            selectedItems.slice(selectedIndex + 1)
        );
    };
        setSelectedItems(newSelected);
    
    
    };
    
    
    
    const handleToggle2 = (e: any) =>{
        
        const { name, checked} = e.target;
        
        const r = departments.flatMap(department =>  checked  ? (department.name === name) ? department.subDepartments.map(sub=>sub.name): [] :[]);
        setSelectedItems(r);
        
    }
    
    const toggleSubDepartments = (departmentName: string) => {
        if (expanded.includes(departmentName)) {
            setExpanded(expanded.filter(name => name !== departmentName));
        }
        else {
            setExpanded([...expanded, departmentName]);
        }
    };
    
    return (
    <List
        component="nav"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Department List
          </ListSubheader>
        }
    >
        {departments.map(department => {
            
           const isDepartmentSelected = selectedItems.includes(department.name);
            
            const isSubDepartmentsSelected = department.subDepartments.every(
                subDept => selectedItems.includes(subDept.name)
            );
            
           return (
            <div key={department.name}>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => toggleSubDepartments(department.name)}>
                        <ListItemIcon>
                            <Checkbox
                            name={department.name}
                            edge="start"
                            checked={isDepartmentSelected || isSubDepartmentsSelected }
                            tabIndex={-1}
                            disableRipple
                            onClick={handleToggle2}
                            
                            />
                        </ListItemIcon>
                        <ListItemText primary={department.name} />
                        {expanded.includes(department.name) ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={expanded.includes(department.name)} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {department.subDepartments.map(subDept => (
                        <ListItem key={subDept.name} sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Checkbox
                                edge="start"
                                name = {subDept.name}
                                checked={selectedItems.includes(subDept.name)}
                                tabIndex={-1}
                                disableRipple
                                onClick={handleToggle}
                                />
                            </ListItemIcon>
                            <ListItemText primary={subDept.name} />
                        </ListItem>
                        ))}
                    </List>
                </Collapse>
            </div>
          );
        })}
    </List>
    );
};





export default DepartmentList;
