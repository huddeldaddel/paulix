// These are the levels available in the game. To create a new Levels you just have to add a new level element to the
// Levels array - no further changes. Have a look at Blocks.js to get information about the different kinds of blocks
// that are available for your levels.

var Levels = [
    {
        name:"Level 1",
        description: 'Monster haben das Dorf überfallen und <name>s Katze Shorty entführt. Kannst Du <name> helfen Shorty zu retten?',
        theme:'forrest',
        background: {
            color: '#3B9CFB',
            image: 'forrest'
        },
        foreground: '#000000',
        music: 'level_1',
        template:[
            "                                                                                                                                                      ",
            "                                                                                                                                                      ",
            "                                                                                                                                                      ",
            "                                                                                         h h h                                                        ",
            "                                                                                        h h h h                                                       ",
            "      y                       h                                                          h h h                                                        ",
            "                           DEEEEEF                             h       i       i        h h h h                                                       ",
            "                                                      .       DEF     DEF     DEF     DEEEEEEEEEEF             !!! h                                  ",
            "                          h h h h h                  1223                                                     !!!! h                                  ",
            "                         DEEEEEEEEEF           .     4556                                                    !!!!! h         b                        ",
            "                                              1223   4556  !                                                !!!!!! h                                  ",
            "   J         J              R      S          4556   4556    =      =           !   =                      !!!!!!! h      .       !    W   =        e ",
            "2222222222222222222222222222222222222222222227855AB27855AB22222222222222222222222222222222222222222222222222222222223    12222222222222222222222222222",
            "555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555556HHHH45555555555555555555555555555"
        ]
    },
    {
        name:"Level 2",
        description: '<name> hat die Spur der Monster bis zum Eingang einer Höhle verfolgt. Unheimliche Geräusche dringen aus dem Eingang. <name> atmet tief durch,'+
                     'nimmt allen Mut zusammen und tritt in die Dunkelheit.',
        theme:'forrest',
        background: {
            color: '#000000',
            image: undefined
        },
        foreground: '#FFFFFF',
        music: 'level_2',
        template:[
            "                                                                                                                                                      ",
            "                                                                                                                                                      ",
            "                                                                                                                                              iii     ",
            "      y                                                                    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!          *     h/h h h *   hhh     DEF     ",
            "                               !       !        !!!!!!!!!!!!!!!!!!                                   !   ! *    /h h h h *            DEF             ",
            "                                                !                !                                                                                    ",
            "               h h h h h                        ! * .h h h h h * !                                                        DEF  DEF                    ",
            "              !!!!!!!!!!!     !!!     !!!      !!  !!!!!!!!!!!!  !         !!!!!!!!!!!!!!!!!!!   !               DEF DEF                              ",
            "                              !!!     !!!                                  h h h h h h !     !   !   !   !  h                                         ",
            "                  .        .  !!!   . !!!                              ;    h h h h h  !     ! . ! . ! . ! hhh                              ;       e ",
            "222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222223                      12222222222222222",
            "555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555556                      45555555555555555"
        ]
    },
    {
        name:"Level 3",
        description: 'In einem Versteck, ganz am Ende der Höhle, horten die Monster ihre Schätze. Aber Achtung! Die Schätze werden gut bewacht!',
        theme:'forrest',
        background: {
            color: '#000000',
            image: undefined
        },
        foreground: '#FFFFFF',
        music: 'level_2',
        template:[
            "     !!     * h i=h h h h.h *  * h h=h h h h=i h *       ",
            "     !!      !!!!!!!!!!!!!!!    !!!!!!!!!!!!!!!!!        ",
            "     !!                                                  ",
            "  y  !!     * i.h *   *h h.h h h i*  * h h=h h h *       ",
            "     !!      !!!!!    !!!!!!!!!!!!!   !!!!!!!!!!!        ",
            "     !!                                                  ",
            "     !!     * h h h=h i h *  * h h h=h h i *             ",
            "     !!      !!!!!!!!!!!!!    !!!!!!!!!!!!!              ",
            "                                                         ",
            "          *    =    *      .    *     =    =   *       e ",
            "222222222222222222222222222222222222222222222222222222222",
            "555555555555555555555555555555555555555555555555555555555"
        ]
    },
    {
        name:"Level 4",
        description: '<name> hat die Höhle durchquert und folgt weiter der Spur der Monster. Einige von ihnen scheinen sich im Wald versteckt zu haben...',
        theme:'forrest',
        background: {
            color: '#000000',
            image: 'forrest'
        },
        foreground: '#000000',
        music: 'level_3',
        template:[
            "                                                                                                                                                      ",
            "                                                                                                                                                      ",
            "                                                                                                                           i                          ",
            "                                                         hh                                       hh        hh        hh   i                          ",
            "     y                         h h h h h h h            hhhh                                      !!   hh   !!   hh   !!   i                          ",
            "                              !!    !!    !!           !!!!!!!      hh      hhh              !!        !!        !!                                   ",
            "                                                                   1223 h  DEEEF                                                                      ",
            "                          !!                        !              4556 h                  !!                              *    /    *                ",
            "                                                                   4556 h                                                                             ",
            "  c  c                 !!                           DEEEEEEEEF     4556 h            c   !!                                         *b   b/  b  *     ",
            "                                                                   4556 h                                                                             ",
            "a       J   K   L     *    . K  .    *  J     ;        K*     =   *4556* .   .   .  *  !!                                        J     J   ;        e ",
            "2222222223  13  13  12222222222222222222222222222222222222222222222855A22222222222222222222223                                122222222222222222222222",
            "5555555556HH46HH46HH45555555555555555555555555555555555555555555555555555555555555555555555556HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH455555555555555555555555"
        ]
    }
];

module.exports = Levels;