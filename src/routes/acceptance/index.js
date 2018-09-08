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
  { title: '待验收' },
  { title: '已验收' },
];

class Acceptance extends PureComponent {
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
          mode="dark"
          leftContent ={[
            <Icon key="0" type="left" style={{ marginRight: '10px' }} />,
            <span key="1">返回</span>
          ]}
          onLeftClick={() => history.go(-1)}
          >
        验收
        </NavBar>
        <SearchBar
          placeholder="Search"
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
            <div>
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
                      title={<span style={{ fontSize: 18,color: '#333',fontWeight: 'bold' }}>{item.supplierName}</span>}
                      extra={<span>{item.type}</span>}
                    />
                    <Card.Body>
                      <Flex>
                        <Flex.Item> 配送单号：<span>{item.distributionNo}</span> </Flex.Item>
                        <Flex.Item> 品相数：<span>{item.total}</span> </Flex.Item>
                      </Flex>
                      <Flex>
                        <Flex.Item> 计划单号：<span>{item.planNo}</span> </Flex.Item>
                        <Flex.Item> 制单时间：<span>{item.date}</span> </Flex.Item>
                      </Flex>
                    </Card.Body>
                  </Card>)
                }}
              />
            </div>
            <div>
              <ListViewScroll 
                url={`${_local}/acceptanceList2`}
                queryParams={{
                  searchParam: searchName
                }}
                separator={true}
                method="GET"
                item={item => {
                  return (
                  <Card full className='scrollList-item' onClick={() => history.push({ pathname: `/acceptance/detail/${item.id}/${item.index}` })}>
                    <Card.Header
                      title={<span style={{ fontSize: 18,color: '#333',fontWeight: 'bold' }}>{item.supplierName}</span>}
                      extra={<span>{item.type}</span>}
                    />
                    <Card.Body>
                      <Flex>
                        <Flex.Item> 配送单号：<span>{item.distributionNo}</span> </Flex.Item>
                        <Flex.Item> 品相数：<span>{item.total}</span> </Flex.Item>
                      </Flex>
                      <Flex>
                        <Flex.Item> 计划单号：<span>{item.planNo}</span> </Flex.Item>
                        <Flex.Item> 制单时间：<span>{item.date}</span> </Flex.Item>
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

export default connect(state => state)(Acceptance) ;
