import React, { PureComponent } from 'react';
import { WhiteSpace, Badge, Grid, NavBar, Card, Flex, List } from 'antd-mobile';
import ListViewScroll from '../../components/listViewScroll';
import styles from './home.css';
const Item = List.Item;
const Brief = Item.Brief;

const data = [
  {
    uri: require('../../assets/icon_check_before_acceptance.png'),
    text: '验收',
    pending: 8,
    route: 'Acceptance'
  },
  {
    uri: require('../../assets/icon_grounding.png'),
    text: '上架',
    pending: 10,
    route: 'Grounding'
  },
  {
    uri: require('../../assets/icon_lower_frame.png'),
    text: '拣货下架',
    pending: 399,
    route: 'Pick'
  },
  {
    uri: require('../../assets/icon_inventory.png'),
    text: '盘点',
    pending: 88,
    route: 'Inventory'
  },
  {
    uri: require('../../assets/icon_query.png'),
    text: '库存查询',
    route: 'Stock'
  },
]

class HomePage extends PureComponent { 
  render() {
    const { history } = this.props;
    return (
      <div style={{height: '100vh'}}>
        <NavBar
          rightContent={[
            <img 
              alt=''
              src={require('../../assets/user.png')} 
              width={20} 
              height={20}
              onClick={() => history.push({pathname: '/profile'})}
            />
          ]}
        >药品物流管理系统</NavBar>
        <WhiteSpace />
        <Card>
          <Card.Header title={<div className={styles.item_title_line}>我的工作</div>}/>
          <Card.Body>
            <Grid data={data} columnNum={5} hasLine={false} renderItem={(el , index) => {
              return (
                <div
                  className={styles.grid_item}
                  onClick={() => alert('跳转')}
                >
                  <Badge text={el.pending}>
                    <img src={el.uri} style={{width: 60, height: 60}} alt=''/>
                  </Badge>
                  <div className={styles.grid_item_desc}>{el.text}</div>
                </div>
              )  
            }}/>
          </Card.Body>
        </Card>   
        <WhiteSpace />
        <Card>
          <Card.Header title={<div className={styles.item_title_line}>提醒消息</div>}/>
          <Card.Body>
          <ListViewScroll 
            url={`https://www.easy-mock.com/mock/5b8d3b510ab8991436ebd336/spd/message`}
            queryParams={{
              searchParam: ''
            }}
            separator={true}
            method="GET"
            item={item => {
              return (
                <Item
                  arrow="horizontal"
                  multipleLine
                  onClick={() => history.push(`/message/${item.id}`)}
                  platform="android"
                >
                  {item.messageContent}<Brief>{item.date}</Brief>
                </Item>
              )
            }}
          />
          </Card.Body>
        </Card> 
      </div>
    )
  }
}

export default HomePage;