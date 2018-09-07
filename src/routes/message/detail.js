import React, { PureComponent } from 'react';
import { NavBar, Icon, List } from 'antd-mobile';
import promiseRequest from '../../utils/promise_request';

const Item = List.Item;

class MessageDetail extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  async componentDidMount() {
    // const data = await promiseRequest('https://www.easy-mock.com/mock/5b8d3b510ab8991436ebd336/spd/messageDetail', {
    //   method: 'GET'
    // })
    const { data } = await promiseRequest(`https://www.easy-mock.com/mock/5b8d3b510ab8991436ebd336/spd/messageDetail`, {
      method: 'GET',
      type: 'formData'
    });
    this.setState({ data })
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <NavBar
          leftContent={<Icon type='left'/>}
          onLeftClick={() => this.props.history.push({pathname: '/home'})}
        >提醒</NavBar>
        <List renderHeader={() => <div>
          <div style={{ textAlign: 'center', fontSize: 18 }}>{ data.content }</div>
          <div style={{textAlign: 'center',marginTop: 10}}>{ data.date }</div>
        </div>}>
          <Item>商品名称: { data.prodName } </Item>
          <Item>通用名称: { data.geName } </Item>
          <Item>规格: { data.spec } </Item>
          <Item>剂型: { data.fmodel } </Item>
          <Item>生产厂家: { data.prodCompany }  </Item>
          <Item>包装规格: { data.packageUnit } </Item>
          <Item>单位: { data.unit } </Item>
          <Item>库存上限: { data.stockUp }  </Item>
          <Item>库存下限: { data.stockDown } </Item>
        </List>
      </div>
    )
  }
}

export default MessageDetail;