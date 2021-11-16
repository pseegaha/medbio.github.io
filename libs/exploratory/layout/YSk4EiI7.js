window["viz_YSk4EiI7"]= {"name":"YSk4EiI7","displayName":"Number of Subjects","dependencies":["Participants_Total"],"transformName":"Participants_Total_FvC5oAG9","options":{"marker":"bar","x":{"name":"Year","validName":"Year","isNumeric":true,"isDate":false,"type":"numeric","func":"none","validLabel":"c1","label":"c1","displayName":""},"sortTarget":"y","displayName":"Number of Subjects","columns":[{"name":"id","type":"character","escapedName":"id","_row":"id","isNumeric":false,"isDate":false},{"name":"path","type":"character","escapedName":"path","_row":"path","isNumeric":false,"isDate":false},{"name":"runname","type":"character","escapedName":"runname","_row":"runname","isNumeric":false,"isDate":false},{"name":"fasta_file","type":"character","escapedName":"fasta_file","_row":"fasta_file","isNumeric":false,"isDate":false},{"name":"Sample","type":"character","escapedName":"Sample","_row":"Sample","isNumeric":false,"isDate":false},{"name":"PIPS_Code","type":"character","escapedName":"PIPS_Code","_row":"PIPS_Code","isNumeric":false,"isDate":false},{"name":"Medbio_ID","type":"character","escapedName":"Medbio_ID","_row":"Medbio_ID","isNumeric":false,"isDate":false},{"name":"Date","type":"Date","escapedName":"Date","_row":"Date","isNumeric":false,"isDate":true},{"name":"Sample_Type","type":"character","escapedName":"Sample_Type","_row":"Sample_Type","isNumeric":false,"isDate":false},{"name":"seq_rerun_labtracer","type":"character","escapedName":"seq_rerun_labtracer","_row":"seq_rerun_labtracer","isNumeric":false,"isDate":false},{"name":"PI_Code","type":"character","escapedName":"PI_Code","_row":"PI_Code","isNumeric":false,"isDate":false},{"name":"PS_Code","type":"numeric","escapedName":"PS_Code","_row":"PS_Code","isNumeric":true,"isDate":false},{"name":"PI Only","type":"character","escapedName":"`PI Only`","_row":"PI Only","isNumeric":false,"isDate":false},{"name":"Parent Study Only","type":"character","escapedName":"`Parent Study Only`","_row":"Parent Study Only","isNumeric":false,"isDate":false},{"name":"Sample_length","type":"integer","escapedName":"Sample_length","_row":"Sample_length","isNumeric":true,"isDate":false},{"name":"FastQC_good_reads","type":"numeric","escapedName":"FastQC_good_reads","_row":"FastQC_good_reads","isNumeric":true,"isDate":false},{"name":"MergeMates_good_reads","type":"numeric","escapedName":"MergeMates_good_reads","_row":"MergeMates_good_reads","isNumeric":true,"isDate":false},{"name":"Genome_Project_Name","type":"character","escapedName":"Genome_Project_Name","_row":"Genome_Project_Name","isNumeric":false,"isDate":false},{"name":"Genome_Comments","type":"character","escapedName":"Genome_Comments","_row":"Genome_Comments","isNumeric":false,"isDate":false},{"name":"Genome_Type","type":"character","escapedName":"Genome_Type","_row":"Genome_Type","isNumeric":false,"isDate":false},{"name":"Summedup_MergeMates_good_reads","type":"numeric","escapedName":"Summedup_MergeMates_good_reads","_row":"Summedup_MergeMates_good_reads","isNumeric":true,"isDate":false},{"name":"Lowest_Value_MergeMates_good_reads","type":"numeric","escapedName":"Lowest_Value_MergeMates_good_reads","_row":"Lowest_Value_MergeMates_good_reads","isNumeric":true,"isDate":false},{"name":"Highest_Value_MergeMates_good_reads","type":"numeric","escapedName":"Highest_Value_MergeMates_good_reads","_row":"Highest_Value_MergeMates_good_reads","isNumeric":true,"isDate":false},{"name":"Number_of_Replicates","type":"numeric","escapedName":"Number_of_Replicates","_row":"Number_of_Replicates","isNumeric":true,"isDate":false},{"name":"Latest_Version_Sample","type":"character","escapedName":"Latest_Version_Sample","_row":"Latest_Version_Sample","isNumeric":false,"isDate":false},{"name":"Initial_Version_Sample","type":"character","escapedName":"Initial_Version_Sample","_row":"Initial_Version_Sample","isNumeric":false,"isDate":false},{"name":"Common_Occurence_Sample","type":"character","escapedName":"Common_Occurence_Sample","_row":"Common_Occurence_Sample","isNumeric":false,"isDate":false},{"name":"Frequency_of_Medbio_IDs","type":"numeric","escapedName":"Frequency_of_Medbio_IDs","_row":"Frequency_of_Medbio_IDs","isNumeric":true,"isDate":false},{"name":"Number of Subjects","type":"character","escapedName":"`Number of Subjects`","_row":"Number of Subjects","isNumeric":false,"isDate":false},{"name":"Year","type":"numeric","escapedName":"Year","_row":"Year","isNumeric":true,"isDate":false},{"name":"Sample Type","type":"character","escapedName":"`Sample Type`","_row":"Sample Type","isNumeric":false,"isDate":false}],"_desktopVersion":"6.7.1.2","xReflineType":"none","y":{"name":"Number of Subjects","validName":"`Number of Subjects`","isNumeric":false,"isDate":false,"type":"character","func":"countd","label":"c2","validLabel":"c2","displayName":""},"colorBucketGroup":"all","xBucketGroup":"all","yReflineRangeType":"none","sampleDataSize":0,"xEnableOtherGroup":null,"xNumGroupsToPreserve":null,"xShowOtherGroup":null,"xOtherGroupLabel":null,"xOtherGroupValues":null,"validateNUniqueValues":"on","_pivotValueSeparator":"|||","data":{"c1":[2017,2018,2019,2020,2021],"c2":[286,1223,1085,309,252],"c3":[286,1509,2594,2903,3155],"..nrow":[286,1223,1085,309,252]},"query":"try(jsonlite::toJSON({.dqdf <- `Participants_Total_FvC5oAG9`;\n.dqdf %>% \ndplyr::ungroup() %>% \n(function(x){ colnames(x)<-make.unique(colnames(x)); return (x)}) %>% \ndplyr::mutate_if(bit64::is.integer64, as.numeric) %>% \ndplyr::mutate_if(lubridate::is.period, lubridate::as.difftime) %>% \ndplyr::mutate_if(lubridate::is.interval, lubridate::as.difftime) %>% \ndplyr::mutate_if(lubridate::is.difftime, as.numeric) %>% \ndplyr::mutate(c1=Year,c2=`Number of Subjects`,c3=`Number of Subjects`,..nrow=1) %>% \ndplyr::filter(!is.na(c1)) %>% \ndplyr::group_by (c1) %>% \ndplyr::summarise(c2=n_distinct(c2),c3=n_distinct(c3),..nrow=dplyr::n()) %>% \ndplyr::ungroup() %>% \ndplyr::filter(!is.na(c3)) %>% \ndplyr::mutate(c3=cumsum(c3)) %>% \ndplyr::ungroup() %>% \ndplyr::arrange(c1) %>% \n(function(df) {   `_tam_setCurrentVizDataCache`(df, type=\"groupby\", colnames=c(\"c1\"=\"Year\", \"c2\"=\"Number of Subjects\", \"c3\"=\"Number of Subjects (2)\", \"..nrow\"=\"[remove]\"))\n  return (df);})\n}\n, na=\"null\" , dataframe=\"columns\", digits=10))","height":500,"width":800,"yEnableOtherGroup":null,"yNumGroupsToPreserve":null,"yShowOtherGroup":null,"yOtherGroupLabel":null,"yOtherGroupValues":null,"y1EnableOtherGroup":null,"y1NumGroupsToPreserve":null,"y1ShowOtherGroup":null,"y1OtherGroupLabel":null,"y1OtherGroupValues":null,"y1":{"name":"Number of Subjects","displayName":"","validName":"`Number of Subjects`","type":"character","isNumeric":false,"isDate":false,"func":"countd","label":"c3","validLabel":"c3"},"y1ReflineRangeType":"none","y1WindowFunc":"cumsum","y1WindowFuncGroup":"cum","y1Use2ndAxis":"on","legendShowAxisName":"off","y1MarkerShape":"line+circle","y1MarkerCircleSize":"","y1MarkerSize":"","numDecimalDigits":"","useThousandSeparator":"off","yValueOnPlotThreshold":"","yValueOnPlotFontSize":"","showNumberOfRowsInBalloon":"off","legendFontSize":"","legendShowFuncName":"off","title":"Progress of Subject Processing","titleFontSize":"14","xAxisShowTitle":"on","xAxisTitle":"","xAxisTitleFontSize":"12","xAxisShowTickLabel":"on","xAxisNumDecimalDigits":"","xAxisUseSIPrefix":"on","xAxisAutomaticNumOfTicks":"on","xAxisRange":"","xAxisTickStep":"","xAxisTickFontSize":"","yAxisShowTitle":"on","yAxisTitle":"","yAxisTitleFontSize":"12","yAxisShowTickLabel":"on","yAxisCurrencySymbol":"","y1AxisNumDecimalDigits":"","y1AxisUseSIPrefix":"on","yAxisRange":"","yAxisTickStep":"","yAxisIncludeZero":"on","yAxisTickFontSize":"","y2AxisShowTitle":"on","y2AxisTitle":"","y2AxisTitleFontSize":"12","y2AxisShowTickLabel":"on","y2AxisCurrencySymbol":"","y2AxisNumDecimalDigits":"","y2AxisUseSIPrefix":"on","y2AxisRange":"","y2AxisTickStep":"","y2AxisIncludeZero":"on","y2AxisTickFontSize":"","axisAutoMargin":"on","marginTop":"","marginBottom":"","marginLeft":"","marginRight":"","legendLocation":"none","yColumnName":"Number of Subjects (Blue)","y1ColumnName":"Cumulative Sum of Subjects (Orange)"},"timestamp":"2021-10-08T04:58:31.869Z","updatedBy":"","thumbnail":null,"snapshot":null,"publicTitle":"","publicDescription":"","publicDataSourceURL":"","withSteps":false,"privateShare":true,"sharedURL":"","previousSharedURL":"","sharedDate":null,"publishSizeOption":null,"insightMetaInfo":{"version":1,"url":null,"isPrivate":false,"thumbnail":null,"title":"","description":"","learnMoreUrl":null,"exampleUrl":null,"sharedFileTypes":[],"withSteps":false,"dataSourceURL":""},"preprocessor":"","_tags":null,"filterCommand":{"name":"filter","conditions":[]},"variables":[],"tabIndex":1,"_isDirty":false,"_createdVersion":"","annotation":"","_tempAnnotation":"","_tempDisplayName":"","_thumbnailFileName":"","_containsInvalidColumns":null,"filename":"YSk4EiI7.json"}