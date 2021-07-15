function Past({ className, timeInfo, customerInfo, needBottomBorder }) {
    return (
        <div className={`w-full flex flex-col ${className}`}>
            <hr className="mb-s border border-text opacity-20"/>
            <div className="w-full px-m">
                <p className="p1">
                    {`${timeInfo.year}년 ${timeInfo.month}월 ${timeInfo.date}일`}
                </p>
                <p className="p1">
                    {`${timeInfo.start.period} ${timeInfo.start.hour}시 ${timeInfo.start.minute}분`}
                    &nbsp; - &nbsp;
                    {`${timeInfo.end.period}${timeInfo.end.hour}시 ${timeInfo.end.minute}분`}
                </p>
                <p className="p1">
                    {`${customerInfo.plate} (${customerInfo.name} 고객님)`}
                </p>
            </div>
            {needBottomBorder ? <hr className="mt-s border border-text opacity-20"/> : null}
        </div>
    )
}

export default Past