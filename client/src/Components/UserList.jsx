import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import userIcon from '../Assets/img/default-user-image.png';

const dictionary = {
    on: 'success',
    off: 'error',
    lunch: 'warning',
};

const styles = {
    avatar: {
        width:"45px", 
        height:"45px",
    }
}

export default function UserList({list}) {
    return (
        <List>
            <Divider />
            {list.map(usr => (
                <div key={usr.id}>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Badge variant="dot" color={dictionary[usr.status] || 'error'} overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
                                <Avatar alt={usr.name} src={usr.img || userIcon} sx={styles.avatar}/>
                            </Badge>
                        </ListItemAvatar>
                        <ListItemText primary={usr.name}/>
                    </ListItemButton>
                    <Divider />
                </div>
            ))}
        </List>
    )
};