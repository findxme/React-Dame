import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;
import Link from 'umi/link';


class A extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (


            <Menu
                theme="dark"
                mode="horizontal"
                // defaultSelectedKeys={['0']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
                <Menu.Item key="sub"><Link to="/layout/Helloworld3">折线图</Link></Menu.Item>
            </Menu>
            // <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="light " multiple={true} selectable={true}>

            //     <SubMenu
            //         title={
            //             <span className="submenu-title-wrapper">
            //                 <Icon type="setting" />
            //                 Navigation Three - Submenu
            // </span>
            //         }
            //     >
            //         <Menu.ItemGroup title="Item 1">
            //             <Menu.Item key="setting:1">Option 1</Menu.Item>
            //             <Menu.Item key="setting:2">Option 2</Menu.Item>
            //         </Menu.ItemGroup>
            //         <Menu.ItemGroup title="Item 2">
            //             <Menu.Item key="setting:3">Option 3</Menu.Item>
            //             <Menu.Item key="setting:4">Option 4</Menu.Item>
            //         </Menu.ItemGroup>
            //     </SubMenu>

            // </Menu>
        );
    }
}
export default A;