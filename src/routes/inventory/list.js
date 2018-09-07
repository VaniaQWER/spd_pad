/* 盘点列表 */
import React, { PureComponent } from 'react';
import { NavBar, Icon , SearchBar , Tabs , Flex , Card , InputItem , Button} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import ListViewScroll from '../../components/listViewScroll';
import { createForm } from 'rc-form';

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: '未提交' },
  { title: '已提交' }
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
    const { getFieldProps } = this.props.form;
    const { searchName } = this.state;
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
          >药品信息</NavBar>

        {/* 搜索栏 */}
        <SearchBar
          placeholder="商品名/生产厂家/货位"
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
              <div style={{backgroundColor: '#fff' }}>
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
                          extra={<span className='fr'>-1  未提交</span>}
                        />
                        <Card.Body>
                          <Flex>
                            <Flex.Item>单位 :<span>{item.distributionNo}</span></Flex.Item>
                            <Flex.Item>货位 :<span>{item.distributionNo}</span></Flex.Item>
                          </Flex>
                          <Flex>
                            <Flex.Item>
                                <InputItem
                                  {...getFieldProps('number')}
                                  type="number"
                                >数量 :</InputItem>
                            </Flex.Item>
                            <Flex.Item>规格 :<span>25ml:1.25g</span></Flex.Item>
                          </Flex>
                          <Flex>
                            <Flex.Item>
                                <InputItem
                                  {...getFieldProps('number')}
                                  type="number"
                                >生产日期 :</InputItem>
                            </Flex.Item>
                            <Flex.Item>
                              <InputItem
                                {...getFieldProps('number')}
                                type="number"
                              >生产批号 :</InputItem>
                            </Flex.Item>
                          </Flex>
                          <Flex>
                            <Flex.Item>
                                <InputItem
                                  {...getFieldProps('number')}
                                  type="number"
                                >有效期至 :</InputItem>
                            </Flex.Item>
                            <Flex.Item>生产厂家 :<span>浙江安宝药业有限公司</span></Flex.Item>
                          </Flex>
                          <hr className='hr'/>
                          <Flex justify='end'>
                            <Button inline  size="small" className='button-gap'>收起编辑</Button>
                            <Button inline  size="small" className='button-gap'>更多详情</Button>
                            <Button inline  size="small" className='button-gap' type="primary">提交</Button>
                          </Flex>
                        </Card.Body>
                      </Card>
                    )
                  }}
                />
              </div>
              <div style={{height:'70vh' , backgroundColor: '#fff' }}>
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
              </div>
          </Tabs>
        </StickyContainer>
      </div>
    )
  }
}

export default createForm()(Stock);