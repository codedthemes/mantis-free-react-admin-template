// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined,
    AliwangwangOutlined
    
  } from '@ant-design/icons';
  
  // icons
  const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    AliwangwangOutlined
  };
  
  // ==============================|| MENU ITEMS - UTILITIES ||============================== //
  
  const section = {
    id: 'section',
    title: 'Section',
    type: 'group',
    children: [
      {
        id: 'Teenager',
        title: 'Teenagers A',
        type: 'item',
        url: '/Teenagera',
        icon: icons.AliwangwangOutlined
      },
      {
        id: 'youngAdult',
        title: 'Young Adults',
        type: 'item',
        url: '/youngadult',
        icon: icons.AliwangwangOutlined
      },
      {
        id: 'Children',
        title: 'Children C',
        type: 'item',
        url: '/Childrenc',
        icon: icons.AliwangwangOutlined
      },
      {
        id: 'Adult',
        title: 'Adults Only D',
        type: 'item',
        url: '/AdultsOnlyD',
        icon: icons.AliwangwangOutlined
      },
    ]
  };
  
  export default section;
  