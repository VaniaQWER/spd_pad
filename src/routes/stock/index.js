import React, { PureComponent } from 'react';
import { NavBar, Icon , SearchBar , Tabs , Flex , Card} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import ListViewScroll from '../../components/listViewScroll';
import { connect } from 'dva';
function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: '全部' },
  { title: '更多筛选' }
];

class Stock extends PureComponent {

  state = {
    url: '',
    searchName: '',
  }

  clickTab = (tab,index)=>{
    console.log(tab,index)
  }

  toDetail = (id)=>{
    const { history } = this.props;
    history.push('/stock/detail')
  }
  render() {
    const { searchName } = this.state;
    const { history } = this.props;
    return (
      <div>
        {/* 导航栏 */}
        <NavBar
          mode="dark"
          leftContent={[
            <Icon key="0" type="left" style={{ marginRight: '10px' }} />,
            <span key="1">返回</span>,
          ]}
          onLeftClick={() => history.go(-1)}
          >库存查询</NavBar>

        {/* 搜索栏 */}
        <SearchBar
          placeholder="通用名/商品名/生产厂家"
          onSubmit={value => console.log(value, 'onSubmit')}
          onClear={value => console.log(value, 'onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onCancel={() => console.log('onCancel')}
          onChange={this.onChange}
        />
        {/* tab页切栏 */}
        <StickyContainer>
          <Tabs 
            tabs={tabs}
            initalPage={'t1'}
            renderTabBar={renderTabBar}
            onTabClick={this.clickTab}
            >
                <ListViewScroll 
                  url={`https://www.easy-mock.com/mock/5b8d3b510ab8991436ebd336/spd/acceptanceList`}
                  queryParams={{
                    searchParam: searchName
                  }}
                  method="GET"
                  item={item => {
                    return (
                      <Card  full  className='scrollList-item' key={item.id} onClick={()=>this.toDetail(item.id)}>
                        <Card.Header
                          title={<span style={{ fontSize: 18,color: '#333',fontWeight: 'bold' }}>{item.supplierName}</span>}
                          extra={<span className='fr text-danger'>近效期</span>}
                        />
                        <Card.Body>
                          <Flex>
                            <Flex.Item>单位 :<span>{item.distributionNo}</span></Flex.Item>
                            <Flex.Item>规格 :<span>{item.date}</span></Flex.Item>
                          </Flex>
                          <Flex>
                            <Flex.Item>数量 :<span>{item.total}</span></Flex.Item>
                            <Flex.Item>近效期数量 :<span className='text-danger'>{item.total}</span></Flex.Item>
                          </Flex>
                        </Card.Body>
                      </Card>
                    )
                  }}
                />
                <ListViewScroll 
                  url={`https://www.easy-mock.com/mock/5b8d3b510ab8991436ebd336/spd/acceptanceList`}
                  queryParams={{
                    searchParam: searchName
                  }}
                  method="GET"
                  item={item => {
                    console.log(item)
                    return (
                      <Card  full  className='scrollList-item' key={item.id}>
                        <Card.Header
                          title={<span style={{ fontSize: 18,color: '#333',fontWeight: 'bold' }}>{item.supplierName}</span>}
                          extra={<span className='fr text-danger'>近效期</span>}
                        />
                        <Card.Body>
                          <Flex>
                            <Flex.Item>单位 :<span>{item.distributionNo}</span></Flex.Item>
                            <Flex.Item>规格 :<span>{item.date}</span></Flex.Item>
                          </Flex>
                          <Flex>
                            <Flex.Item>数量 :<span>{item.total}</span></Flex.Item>
                            <Flex.Item>近效期数量 :<span className='text-danger'>{item.total}</span></Flex.Item>
                          </Flex>
                        </Card.Body>
                      </Card>
                    )
                  }}
                />
          </Tabs>
        </StickyContainer>
      </div>
    )
  }
}

export default connect(state => state)(Stock);