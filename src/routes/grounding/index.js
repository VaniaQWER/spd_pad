
import React, { PureComponent } from 'react';
import { NavBar, Icon, SearchBar, Tabs, Card, Flex } from 'antd-mobile';
import { connect } from 'dva';
import { StickyContainer, Sticky } from 'react-sticky';
import { _local } from '../../api/local'
import ListViewScroll from '../../components/listViewScroll';

const renderTabBar = (props)=>{
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}

const tabs = [
  { title: '待拣货' },
  { title: '已拣货' },
];

class Grounding extends PureComponent {
  state = {
    url: '',
    searchName: '',
  }
  render() {
    const { searchName } = this.state;
    const { history } = this.props;
    return (
      <div>
        <NavBar
          mode="light"
          leftContent ={[
            <Icon key="0" type="left" style={{ marginRight: '10px' }} />,
            <span key="1">返回</span>
          ]}
          onLeftClick={() => console.log('onLeftClick')}
          >
          拣货下架
        </NavBar>
        <SearchBar
          placeholder="下架单号"
          onSubmit={value => console.log(value, 'onSubmit')}
          onClear={value => console.log(value, 'onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onCancel={() => console.log('onCancel')}
          onChange={this.onChange}
        />
        <StickyContainer>
          <Tabs tabs={tabs}
            initalPage={'t2'}
            renderTabBar={renderTabBar}
          >
            <div className='scrollList'>
              <ListViewScroll 
                url={`${_local}/acceptanceList`}
                queryParams={{
                  searchParam: searchName
                }}
                separator={true}
                method="GET"
                item={item => {
                  return (
                  <Card full className='scrollList-item' onClick={() => history.push({ pathname: `/acceptance/detail/${item.id}/${item.index}` })}>
                    <Card.Header
                      title={<span style={{ fontSize: 18,color: '#333',fontWeight: 'bold' }}>{` 拣货单号： ${item.id}`}</span>}
                      extra={<span>{ ` 待拣货  ${item.type}`}</span>}
                    />
                    <Card.Body>
                      <Flex>
                        <Flex.Item> 发起时间：<span>{item.date}</span> </Flex.Item>
                        <Flex.Item> 品相数：<span>{item.total}</span> </Flex.Item>
                      </Flex>
                    </Card.Body>
                  </Card>)
                }}
              />
            </div>
            <div className='scrollList'>
              <ListViewScroll 
                url={`${_local}/acceptanceList`}
                queryParams={{
                  searchParam: searchName
                }}
                separator={true}
                method="GET"
                item={item => {
                  return (
                  <Card full className='scrollList-item' onClick={() => history.push({ pathname: `/acceptance/detail/${item.id}/${item.index}` })}>
                    <Card.Header
                      title={<span style={{ fontSize: 18,color: '#333',fontWeight: 'bold' }}>{` 拣货单号： ${item.id}`}</span>}
                      extra={<span>{ ` 已拣货  ${item.type}`}</span>}
                    />
                    <Card.Body>
                      <Flex>
                        <Flex.Item> 发起时间：<span>{item.date}</span> </Flex.Item>
                        <Flex.Item> 品相数：<span>{item.total}</span> </Flex.Item>
                      </Flex>
                    </Card.Body>
                  </Card>)
                }}
              />
            </div>
          </Tabs>
        </StickyContainer>
      </div>
    )
  }
}

export default connect(state => state)(Grounding) ;
