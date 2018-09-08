/*
 * @Author: yuwei -拣货下架 - 详情
 * @Date: 2018-09-08 01:09:01 
* @Last Modified time: 2018-09-08 01:09:01 
 */

import React, { PureComponent } from 'react';
import { NavBar, Icon , SearchBar , Tabs , Flex , Card , Button , Modal} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import ListViewScroll from '../../components/listViewScroll';
import { connect } from 'dva';
import { createForm } from 'rc-form';
import { _local } from '../../api/local'

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: '待拣货' },
  { title: '已拣货' }
];
const alert = Modal.alert;
class UndercarriageDetail extends PureComponent {

  state = {
    url: '',
    searchName: '',
  }

  clickTab = (tab,index)=>{
    console.log(tab,index)
  }

  toDetail = (id)=>{
    const { history } = this.props;
    history.push('/undercarriage/detailInfo')
  }

  render() {
    // const { getFieldProps } = this.props.form;
    const { searchName } = this.state;
    const { history } = this.props;
    return (
      <div>
        {/* 导航栏 */}
        <NavBar
          mode="light"
          leftContent={[
            <Icon key="0" type="left" style={{ marginRight: '10px' }} />,
            <span key="1">返回</span>,
          ]}
          onLeftClick={() => history.go(-1)}
          >药品信息</NavBar>

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
              <div style={{backgroundColor: '#fff' }}>
                <ListViewScroll 
                  url={`${_local}/undercarriage`}
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
                            extra={<span className='fr'>待拣货</span>}
                          />
                          <Card.Body>
                            <Flex>
                              <Flex.Item>单位 :<span>{item.distributionNo}</span></Flex.Item>
                              <Flex.Item>货位 :<span>{item.date}</span></Flex.Item>
                            </Flex>
                            <Flex>
                              <Flex.Item>数量 :<span>{item.total}</span></Flex.Item>
                              <Flex.Item>规格 :<span>25ml:1.25g</span></Flex.Item>
                            </Flex>
                            <Flex>
                              <Flex.Item>生产厂家 :<span>浙江安宝药业有限公司</span></Flex.Item>
                              <Flex.Item>生产批号 :<span>PH1231</span></Flex.Item>
                            </Flex>
                            <Flex>
                              <Flex.Item>生产日期 :<span>{item.date}</span></Flex.Item>
                            </Flex>
                          <hr className='hr'/>
                          <Flex justify='end'>
                            <Button inline  size="small" className='button-gap' onClick={this.toDetail}>更多详情</Button>
                            <Button inline  size="small" className='button-gap' type="primary" 
                            onClick={() =>
                              alert('确认拣货', '是否执行此操作??', [
                                { text: '否', onPress: () => console.log('cancel') },
                                { text: '是', onPress: () => console.log('ok') },
                              ])
                            }>确认拣货</Button>
                          </Flex>
                        </Card.Body>
                      </Card>
                    )
                  }}
                />
              </div>
              <div style={{backgroundColor: '#fff' }}>
                  <ListViewScroll 
                    url={`${_local}/undercarriage1`}
                    queryParams={{
                      searchParam: searchName
                    }}
                    method="GET"
                    item={item => {
                      return (
                        <Card  full  className='scrollList-item' key={item.id}>
                          <Card.Header
                            title={<span style={{ fontSize: 18,color: '#333',fontWeight: 'bold' }}>{item.supplierName}</span>}
                            extra={<span className='fr'>已拣货</span>}
                          />
                          <Card.Body>
                            <Flex>
                              <Flex.Item>单位 :<span>{item.distributionNo}</span></Flex.Item>
                              <Flex.Item>货位 :<span>{item.date}</span></Flex.Item>
                            </Flex>
                            <Flex>
                              <Flex.Item>数量 :<span>{item.total}</span></Flex.Item>
                              <Flex.Item>规格 :<span>25ml:1.25g</span></Flex.Item>
                            </Flex>
                            <Flex>
                              <Flex.Item>生产厂家 :<span>浙江安宝药业有限公司</span></Flex.Item>
                              <Flex.Item>生产批号 :<span>PH1231</span></Flex.Item>
                            </Flex>
                            <Flex>
                              <Flex.Item>生产日期 :<span>{item.date}</span></Flex.Item>
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

export default connect()(createForm()(UndercarriageDetail)) ;