// priority: 0

// Visit the wiki for more info - https://kubejs.com/




// glass_box

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('glass_box')
        .setEUIO('in')
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(6, 1, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})


GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('glass_box', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('glass_box')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern((definition) => FactoryBlockPattern.start()
            .aisle('CCC', 'ZGZ', 'ZGZ', 'ZNZ')
            .aisle('CCC', 'GSG', 'GMG', 'ZOZ')
            .aisle('CKC', 'ZXZ', 'ZXZ', 'ZZZ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.blocks('gtceu:heat_vent'))
            .where('G', Predicates.blocks('gtceu:laminated_glass'))
            .where('X', Predicates.blocks('ae2:quartz_vibrant_glass'))
            .where('Z', Predicates.blocks('gtceu:plascrete'))
            .where('S', Predicates.blocks('gtceu:filter_casing'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE)
                .setExactLimit(1)
            )
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/voltage/hv/side', "gtceu:block/multiblock/implosion_compressor")
})
 






// desulfurizer

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('desulfurizer')
        .setEUIO('in')
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 1, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('desulfurizer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('desulfurizer')
                .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle('  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ')
        .aisle('CCDPDCLCLCLC', 'CCDPDCLCLCLC', 'CCDPD L L L ', '  DPD       ', '  DPD       ', '  DDD       ')
        .aisle('CCDDDCLCLCLC', 'CGDDDXXXXXXX', 'CCDDDCLCLCLC', '  DDD L L L ', '  DDD L L L ', '  DDD       ')
        .aisle('CCCCCCLCLCLC', 'CGGGCCLCLCLC', 'CCCCCCLCLCLC', '   XXXXXXXX ', '      L L L ', '            ')
        .aisle('CCDDDCLCLCLC', 'CGDDDXXXXXXX', 'CCDDDCLCLCLC', '  DDD L L L ', '  DDD L L L ', '  DDD       ')
        .aisle('CCDPDCLCLCLC', 'CKDPDCLCLCLC', 'CCDPD L L L ', '  DPD       ', '  DPD       ', '  DDD       ')
        .aisle('  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ', '  DDD       ')
        .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('gtceu:tempered_glass'))
            .where('P', Predicates.blocks('gtceu:titanium_pipe_casing'))
            .where('G', Predicates.blocks('gtceu:titanium_gearbox'))
            .where('D', Predicates.blocks('gtceu:clean_machine_casing'))
            .where('L', Predicates.blocks(GTBlocks.COIL_NICHROME.get()))
            .where('C', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE)
                .setExactLimit(1)
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/voltage/ev/side', "gtceu:block/multiblock/implosion_compressor")
})









// large_gas_collector

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_gas_collector')
        .setEUIO('in')
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_gas_collector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('gtceu:gas_collector')
                .appearanceBlock(GCyMBlocks.CASING_WATERTIGHT)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle(' CCC ', ' CCC ', ' CCC ', ' CCC ', ' CCC ')
        .aisle('CCCCC', 'CGPGC', 'CGPGC', 'CGPGC', 'CCCCC')
        .aisle('CCCCC', 'CPPPC', 'CPPPC', 'CPPPC', 'CCOCC')
        .aisle('CCCCC', 'CGPGC', 'CGPGC', 'CGPGC', 'CCCCC')
        .aisle(' CCC ', ' CKC ', ' CCC ', ' CCC ', ' CNC ')
        .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where('G', Predicates.blocks('gtceu:tungstensteel_gearbox'))
            .where('C', Predicates.blocks(GCyMBlocks.CASING_WATERTIGHT.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE)
                .setExactLimit(1)
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/voltage/ev/side', "gtceu:block/multiblock/implosion_compressor")
})










// certus_quartz_charger

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('certus_quartz_charger')
        .setEUIO('in')
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('certus_quartz_charger', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('certus_quartz_charger')
                .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC')
            .aisle('CCC', 'CSC', 'COC')
            .aisle('CKC', 'CXC', 'CNC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('ae2:quartz_vibrant_glass'))
            .where('S', Predicates.blocks('ae2:charger'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE)
                .setExactLimit(1)
            )
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/voltage/hv/side', "gtceu:block/multiblock/implosion_compressor")
})
















// large_inscriber

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_inscriber')
        .setEUIO('in')
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(4, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_inscriber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_inscriber')
                .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC', 'CCC')
            .aisle('CCC', 'CSC', 'CZC', 'COC')
            .aisle('CKC', 'CXC', 'CXC', 'CNC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('ae2:quartz_glass'))
            .where('S', Predicates.blocks('ae2:inscriber'))
            .where('Z', Predicates.blocks('gtceu:mv_forming_press'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE)
                .setExactLimit(1)
            )
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/voltage/hv/side',"gtceu:block/multiblock/implosion_compressor")
})








// meat_box

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('meat_box')
        .setEUIO('in')
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('meat_box', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('meat_box')
                .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CCC', 'CCC')
            .aisle('CCC', 'CSC', 'CZC', 'COC')
            .aisle('CKC', 'CXC', 'CXC', 'CNC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks('mob_grinding_utils:tinted_glass'))
            .where('S', Predicates.blocks('mob_grinding_utils:spikes'))
            .where('Z', Predicates.blocks('easy_villagers:breeder'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE)
                .setExactLimit(1)
            )
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/voltage/hv/sidel', "gtceu:block/multiblock/implosion_compressor")
})









// end_game

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('end_game')
        .setEUIO('in')
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(12, 1, 6, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('end_game', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('end_game')
                .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCCCCCCCCCCCC', 'CCCCCCCCCCCCCCC', '   C       C   ', '   C       C   ', '   C  SSS  C   ', '   MMMSUSMMM   ', '   GGGSSSGGG   ', '   GGGSSSGGG   ', '   MMMSUSMMM   ', '      SSS      ', '               ', '               ')
            .aisle('CCCCCCCCCCCCCCC', 'CCCCCCCCCCCCCCC', ' C           C ', ' C           C ', ' C           C ', ' MMM       MMM ', ' GGG       GGG ', ' GGG       GGG ', ' MMM       MMM ', '               ', '               ', '               ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  FFFFFFFFFFF  ', '  F         F  ', '  F         F  ', ' MF         FM ', ' GF         FG ', ' GF         FG ', ' MF         FM ', '  F         F  ', '  F         F  ', '  FF       FF  ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', 'C F         F C', 'C             C', 'C             C', 'MM           MM', 'GG           GG', 'GG           GG', 'MM           MM', '               ', '               ', '  FFF     FFF  ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  F         F  ', '               ', '               ', 'M             M', 'G             G', 'G             G', 'M             M', '               ', '               ', '   FFFFFFFFF   ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  F  GGGGG  F  ', '     GGGGG     ', '     GGGGG     ', 'M    GGGGG    M', 'G    GGGGG    G', 'G    GGGGG    G', 'M    GGGGG    M', '     GGGGG     ', '     GGGGG     ', '    FGGGGGF    ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  F  GBBBG  F  ', '     GBBBG     ', 'S    GBBBG    S', 'S    GBBBG    S', 'S    GBBBG    S', 'S    GBBBG    S', 'S    GBBBG    S', 'S    GBBBG    S', '     GHHHG     ', '    FGGGGGF    ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  F  GBPBG  F  ', '     GBPBG     ', 'S    GBPBG    S', 'U    GBPBG    U', 'S    GBPBG    S', 'S    GBPBG    S', 'U    GBPBG    U', 'S    GBPBG    S', '     GHHHG     ', '    FGGGGGF    ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  F  GBBBG  F  ', '     GBBBG     ', 'S    GBBBG    S', 'S    GBBBG    S', 'S    GBBBG    S', 'S    GBBBG    S', 'S    GBBBG    S', 'S    GBBBG    S', '     GHHHG     ', '    FGGGGGF    ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  F  GGGGG  F  ', '     GGGGG     ', '     GGGGG     ', 'M    GGGGG    M', 'G    GGGGG    G', 'G    GGGGG    G', 'M    GGGGG    M', '     GGGGG     ', '     GGGGG     ', '    FGGGGGF    ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  F         F  ', '               ', '               ', 'M             M', 'G             G', 'G             G', 'M             M', '               ', '               ', '   FFFFFFFFF   ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', 'C F         F C', 'C             C', 'C             C', 'MM           MM', 'GG           GG', 'GG           GG', 'MM           MM', '               ', '               ', '  FFF     FFF  ')
            .aisle('CCCCCCCCCCCCCCC', 'CCHHHHHHHHHHHCC', '  FFFFFFFFFFF  ', '  F         F  ', '  F         F  ', ' MF         FM ', ' GF         FG ', ' GF         FG ', ' MF         FM ', '  F         F  ', '  F         F  ', '  FF       FF  ')
            .aisle('CCCCCCCCCCCCCCC', 'CCCCCCCCCCCCCCC', ' C           C ', ' C           C ', ' C           C ', ' MMM       MMM ', ' GGG       GGG ', ' GGG       GGG ', ' MMM       MMM ', '               ', '               ', '               ')
            .aisle('CCCCCCCCCCCCCCC', 'CCCCCCCKCCCCCCC', '   C       C   ', '   C       C   ', '   C  SSS  C   ', '   MMMSUSMMM   ', '   GGGSSSGGG   ', '   GGGSSSGGG   ', '   MMMSUSMMM   ', '      SSS      ', '               ', '               ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GCyMBlocks.CASING_ATOMIC.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('H', Predicates.blocks("gtceu:uhv_hermetic_casing"))
            .where('F', Predicates.blocks("gtceu:neutronium_frame"))
            .where('P', Predicates.blocks("gtceu:ptfe_pipe_casing"))
            .where('B', Predicates.blocks("gtceu:uhv_ultimate_battery"))
            .where('G', Predicates.blocks("gtceu:fusion_glass"))
            .where('S', Predicates.blocks(GTBlocks.COIL_TRITANIUM.get()))
            // .where('S', Predicates.blocks("gtceu:superconducting_coil"))
            .where('U', Predicates.blocks("gtceu:fusion_coil"))
            .where('M', Predicates.blocks("gtceu:fusion_casing_mk3"))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/voltage/max/side', "gtceu:block/multiblock/implosion_compressor")
})



/*
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('greenhouse')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('greenhouse')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CGC', 'CGC', 'CLC', 'CCC')
            .aisle('CMC', 'GSG', 'G#G', 'LIL', 'COC')
            .aisle('CKC', 'CGC', 'CGC', 'CLC', 'CNC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.blocks('moss_block')
                .or(Predicates.blocks('dirt'))
                .or(Predicates.blocks('grass_block'))
            )
            .where('G', Predicates.blocks('ae2:quartz_glass'))
            .where('S', Predicates.blocks('oak_sapling')
                .or(Predicates.blocks('dark_oak_sapling'))
                .or(Predicates.blocks('spruce_sapling'))
                .or(Predicates.blocks('birch_sapling'))
                .or(Predicates.blocks('jungle_sapling'))
                .or(Predicates.blocks('acacia_sapling'))
                .or(Predicates.blocks('azalea'))
                .or(Predicates.blocks('flowering_azalea'))
                .or(Predicates.blocks('mangrove_propagule'))
                .or(Predicates.blocks('gtceu:rubber_sapling'))
            )
            .where('I', Predicates.blocks('glowstone'))
            .where('L', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('#', Predicates.air())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/implosion_compressor', false)
})*/