import React, { PureComponent } from 'react';
import { NavBar, Icon , SearchBar , Tabs , Flex} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import ListViewScroll from '../../components/listViewScroll';
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

  render() {
    const { url , searchName } = this.state;
    return (
      <div>
        {/* 导航栏 */}
        <NavBar
          mode="light"
          leftContent={[
            <Icon key="0" type="left" style={{ marginRight: '10px' }} />,
            <span key="1">返回</span>,
          ]}
          onLeftClick={() => console.log('onLeftClick')}
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
            >
              <div style={{height:'70vh' , backgroundColor: '#fff' }}>
                <ul className='scrollList' style={{margin: 0,padding: 0}}>
                  <ListViewScroll 
                    url={`https://www.easy-mock.com/mock/5b8d3b510ab8991436ebd336/spd/acceptanceList`}
                    queryParams={{
                      searchParam: searchName
                    }}
                    method="GET"
                    item={item => {
                      console.log(item)
                      return (
                        <li className='scrollList-item' key={item.id}>
                          <div className="sub-title">{item.supplierName}</div>
                          <Flex>
                            <Flex.Item>单位:123</Flex.Item>
                            <Flex.Item>规格:1212313</Flex.Item>
                          </Flex>
                          <Flex>
                            <Flex.Item>数量:123</Flex.Item>
                            <Flex.Item>近效期数量:1212313</Flex.Item>
                          </Flex>
                        </li>
                      )
                    }}
                  />
                </ul>
              </div>
              <div style={{height:'70vh' , backgroundColor: '#fff' }}>
                Content of second tab
              </div>
          </Tabs>
        </StickyContainer>

      </div>
    )
  }
}

export default Stock;