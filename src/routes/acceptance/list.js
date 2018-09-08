import React, { PureComponent } from 'react';
import { NavBar, Icon, SearchBar, Tabs, Card, Flex, Button, Modal, InputItem } from 'antd-mobile';
import { connect } from 'dva';
import { StickyContainer, Sticky } from 'react-sticky';
import { _local } from '../../api/local'
import { createForm } from 'rc-form';
import ListViewScroll from '../../components/listViewScroll';
const alert = Modal.alert;

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
    index: null,
    toggle: false
  }
  render() {
    const { searchName, index, toggle } = this.state;
    const { getFieldProps } = this.props.form;
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
        药品信息
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
                        <Flex.Item> 单位：<span>{item.replanUnit}</span> </Flex.Item>
                        <Flex.Item> 规格：<span>{item.spec}</span> </Flex.Item>
                      </Flex>
                      <Flex>
                        <Flex.Item> 数量：<span>{item.total}</span> </Flex.Item>
                        <Flex.Item> 生产厂家：<span>{item.producter}</span> </Flex.Item>
                      </Flex>
                      {
                        (index === item.index  && toggle) ?
                        <div>
                          <Flex>
                            <Flex.Item> 
                              <InputItem {...getFieldProps(`infactNum_${index}`)}type="number">
                                实到数量 :
                              </InputItem> 
                            </Flex.Item>
                            <Flex.Item> 
                              <InputItem {...getFieldProps(`productDate_${index}`)} >
                                生产日期 :
                              </InputItem> 
                            </Flex.Item>
                          </Flex>
                          <Flex>
                            <Flex.Item> 
                              <InputItem {...getFieldProps(`flot_${index}`)}type="number">
                                  生产批号 :
                                </InputItem> 
                              </Flex.Item>
                            <Flex.Item> 
                              <InputItem {...getFieldProps(`usefulDate_${index}`)} >
                                有效期至 :
                              </InputItem> 
                            </Flex.Item>
                          </Flex>
                          <Flex>
                            <Flex.Item> 批准文号：<span>{item.distributionNo}</span> </Flex.Item>
                            <Flex.Item></Flex.Item>
                          </Flex>
                        </div>
                        :
                        null
                      }
                    </Card.Body>
                    <Card.Footer extra={<div>
                      <Button type='default' size="small" className='button-gap' inline
                        onClick={(e)=> {
                          e.stopPropagation();
                          console.log(item.index,'item')
                          this.setState({ index: item.index, toggle: !this.state.toggle })
                        }
                        }
                      >{item.index === index ?`收起编辑`:`展开编辑`}</Button>
                      <Button type='default' size='small' className='button-gap' inline>更多详情</Button>
                      <Button type='primary' size='small' className='button-gap' inline 
                      onClick={(e) =>{
                        e.stopPropagation()
                        alert('确认提交', '是否执行此操作??', [
                          { text: '否', onPress: () => console.log('cancel') },
                          { text: '是', onPress: () => history.push({ pathname: '/result/success/acceptance' })},
                        ])
                      }
                      }>确认验收</Button>
                    </div>} />
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
                        <Flex.Item> 单位：<span>{item.replanUnit}</span> </Flex.Item>
                        <Flex.Item> 规格：<span>{item.spec}</span> </Flex.Item>
                      </Flex>
                      <Flex>
                        <Flex.Item> 数量：<span>{item.total}</span> </Flex.Item>
                        <Flex.Item> 生产厂家：<span>{item.producter}</span> </Flex.Item>
                      </Flex>
                    </Card.Body>
                    <Card.Footer extra={<div>
                      <Button type='default' size='small' inline>展开编辑</Button>
                      <Button type='default' size='small' inline>更多详情</Button>
                      <Button type='primary' size='small' inline>确认验收</Button>
                    </div>} />
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

export default connect(state => state)( createForm()(Acceptance)) ;
