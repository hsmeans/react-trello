declare module 'react-trello' {
  import React, {StyleHTMLAttributes} from 'react'
  import {Store} from 'redux'
  import PropTypes from 'prop-types'
  interface BoardProps {
    draggable: boolean
    className: string
    landeDraggable: boolean
    cardDraggable: boolean
    collapsibleLanes: boolean
    editable: boolean
    canAddLanes: boolean
    addLaneTitle: string
    handleDragStart(cardId: string, laneId: string): void
    handleDragEnd(
      cardId: string,
      sourceLaneId: string,
      targetLaneId: string,
      position: number,
      cardDetails: object
    ): void
    handleLaneDragStart(laneId: string): void
    handleLaneDragEnd(laneId: string, newPosition: number, payload: object): void
    cardDragClass: string
    laneDragClass: string
    onLaneScroll(requestedPage: number, laneId: string): void
    onCardClick(cardId: string, metadata: object, laneId: string): void
    onCardAdd(card: ICard, laneId: string): void
    onLaneAdd(params: object): void
    addCardLink: PropTypes.ReactNodeLike
    newCardTemplate: PropTypes.ReactNodeLike
    hideCardDeleteIcon: boolean
    onCardDelete(cardId: string, laneId: string): void
    onLaneClick(laneId: string): void
    laneSortFunction(card1: ICard, card2: ICard): void
    eventBusHandle(handle: object): void
    onDataChange(newData: object): void
    style: object
    customCardLayout: boolean
    customLaneHeader: PropTypes.ReactElementLike
    data: object
    tagStyle: object
  }

  interface ICard {
    id: string
    name: string
    dueOn: string
    subTitle: string
    body: string
    escalationText: string
    cardColor: string
    cardStyle: object
    metadata: {id: 'Card1'}
  }

  //   interface CardProps {
  //     key: string
  //     id: string
  //     title: string
  //     index: number
  //     description: string
  //     label: string
  //     tags: Array<Tag>
  //     laneId: string
  //     removeCard(): void
  //     onClick(): void
  //     onDelete(): void
  //     metadata: object
  //     cardStyle: object
  //     dragStyle: object
  //     tagStyle: object
  //     customCardLayout: boolean
  //     customCard: Element
  //     editable: boolean
  //   }

  //   interface LaneProps {
  //     actions: object
  //     children: Element
  //     id: string
  //     boardId: string
  //     title: Element
  //     index: number
  //     laneSortFunction(): void
  //     style: object
  //     cardStyle: object
  //     tagStyle: object
  //     titleStyle: object
  //     labelStyle: object
  //     customLaneHeader: Element
  //     customCardLayout: boolean
  //     cards: Array<Card>
  //     label: string
  //     currentPage: number
  //     draggable: boolean
  //     collapsibleLanes: boolean
  //     droppable: boolean
  //     onLaneScroll(): void
  //     onCardClick(): void
  //     onCardDelete(): void
  //     onCardAdd(): void
  //     onLaneClick(): void
  //     newCardTemplate: Element
  //     addCardLink: Element
  //     addCardTitle: string
  //     editable: boolean
  //     cardDraggable: boolean
  //     cardDragClass: string
  //     canAddLanes: boolean
  //   }

  //   interface LaneState {
  //     loading: boolean
  //     currentPage: number
  //     addCardBode: boolean
  //     collapsed: boolean
  //     isDreaggingOver: boolean
  //   }

  //   interface TagProps {
  //     title: string
  //     color: string
  //     bgcolor: string
  //     tagStyle: object
  //   }

  export default class Board extends React.Component<BoardProps, {}> {
    store: Store
    id: string
  }

  //   class Card extends React.Component<CardProps, {}> {}
  //   class Lane extends React.Component<LaneProps, LaneState> {}
  //   class Tag extends React.Component<TagProps, {}> {}
}
