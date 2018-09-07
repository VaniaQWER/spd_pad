import React, { PureComponent } from 'react';
import { NavBar, Icon, List, Radio } from 'antd-mobile';
const Item = List.Item;
const RadioItem = Radio.RadioItem;
const data = [
  { label: '药库管理系统', value: '1' },
  { label: '急诊药房', value: '2' },
  { label: '门诊药房', value: '3' },
  { label: '静配中心', value: '4' },
]

class Profile extends PureComponent {
  state = {
    value: '1'
  }
  onChange = value => {
    this.setState({
      value,
    });
  }
  render() {
    const { value } = this.state;
    return (
      <div>
        <NavBar
          leftContent={<Icon type='left'/>}
          onLeftClick={() => this.props.history.push({pathname: '/home'})}
        >账号</NavBar>
        <List>
          <Item extra={<Icon type='right'/>} style={{marginTop: 20}}>账号信息</Item>
        </List>
        <List>
          <Item style={{marginTop: 20}}>系统信息</Item>
          <Item>
          {data.map(i => (
            <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
              {i.label}
            </RadioItem>
          ))}
          </Item>
        </List>
      </div>
    )
  }
}

export default Profile;