const initEndpoints = (app) => {

    /**
 * @swagger
 * definitions:
 *  boardItem:
 *   type: object
 *   required:
 *     - boardTitle
 *     - boardContent
 *     - boardState
 *     - boardType
 *   properties:
 *     id:
 *       type: integer
 *       description: ObjectId
 *     boardTitle:
 *       type: string
 *       description: 게시글 제목
 *     boardContent:
 *       type: string
 *       description: 게시글 내용
 *     boardState:
 *       type: boolean
 *       description: 게시글 숨김상태여부
 *     boardType:
 *       type: string
 *       description: 게시글 타입
 */

/**
 * @swagger
 *  /boards:
 *    get:
 *      tags:
 *      - board
 *      description: 모든 게시글을 가져온다.
 *      produces:
 *      - applicaion/json
 *      parameters:
 *      responses:
 *       200:
 *        description: board of column list
 *        schema:
 *          type: array
 *          items:
 *           $ref: '#/definitions/boardItem'
 */


    app.get('/users', (req, res) => res.end('this method should return all users information'));
/**
 * @swagger
 *  /boards:
 *    put:
 *      tags:
 *      - board
 *      description: 게시글을 추가한다.
 *      produces:
 *      - applicaion/json
 *      parameters:
 *      - name: boardTtile
 *        in: body
 *        description: "게시글 제목"
 *        required: true
 *        type: string
 *      - name: boardContent
 *        in: body
 *        description: "게시글 내용"
 *        required: true
 *        type: string
 *      - name: boardState
 *        in: body
 *        description: "게시글 상태"
 *        required: true
 *        type: boolean
 *      - name: boardType
 *        in: body
 *        description: "게시글 타입"
 *        required: true
 *        type: string
 *      responses:
 *       200:
 *        description: add board column list
 *        schema:
 *          type: array
 *          items:
 *           $ref: '#/definitions/boardItem'
 */
    app.get('users/:id', (req, res) => res.end(`this method should return ID ${req.params.id} `));

    /**
 * @swagger
 *  /boards:
 *    put:
 *      tags:
 *      - user
 *      description: 게시글을 추가한다.
 *      produces:
 *      - applicaion/json
 *      parameters:
 *      - name: boardTtile
 *        in: body
 *        description: "게시글 제목"
 *        required: true
 *        type: string
 *      - name: boardContent
 *        in: body
 *        description: "게시글 내용"
 *        required: true
 *        type: string
 *      - name: boardState
 *        in: body
 *        description: "게시글 상태"
 *        required: true
 *        type: boolean
 *      - name: boardType
 *        in: body
 *        description: "게시글 타입"
 *        required: true
 *        type: string
 *      responses:
 *       200:
 *        description: add board column list
 *        schema:
 *          type: array
 *          items:
 *           $ref: '#/definitions/boardItem'
 */

};


module.exports = initEndpoints;