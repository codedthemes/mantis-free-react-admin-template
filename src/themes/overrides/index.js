// third-party
import { merge } from 'lodash';

// project import
import Alert from './Alert';
import Badge from './Badge';
import Button from './Button';
import CardContent from './CardContent';
import Checkbox from './Checkbox';
import Chip from './Chip';
import IconButton from './IconButton';
import Divider from './Divider';
import InputLabel from './InputLabel';
import Input from './Input';
import FormControl from './FormControl';
import TextField from './TextField';
import Select from './Select';
import MuiCard from './MuiCard';
import LinearProgress from './LinearProgress';
import Link from './Link';
import List from './List';
import ListItemIcon from './ListItemIcon';
import OutlinedInput from './OutlinedInput';
import Tab from './Tab';
import TableCell from './TableCell';
import Tabs from './Tabs';
import Typography from './Typography';
import FormHelperText from './FormHelperText';
import Stepper from './Stepper';
import Popover from './Popover';

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme) {
  return merge(
    Alert(theme),
    Button(theme),
    Badge(theme),
    CardContent(),
    Checkbox(theme),
    Chip(theme),
    IconButton(theme),
    FormControl(theme),
    TextField(),
    Select(),
    FormHelperText(),
    MuiCard(),
    Divider(theme),
    InputLabel(theme),
    Input(theme),
    LinearProgress(),
    Link(),
    List(),
    ListItemIcon(),
    OutlinedInput(theme),
    Tab(theme),
    TableCell(theme),
    Tabs(),
    Typography(),
    Stepper(theme),
    Popover(theme),
  );
}
