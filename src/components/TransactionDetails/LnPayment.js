import React from "react"
import PropTypes from "prop-types"
import { formatDate } from "../../utils"

const emptyPayment = {
  hash: "0000000000000000000000000000000000000000000000000000000000000000",
  status: "PENDING",
  amount: 0,
  roundedUpFee: 0,
  createdAt: 0,
  confirmedAt: 0,
  secret: "0000000000000000000000000000000000000000000000000000000000000000",
  request: "lnbc1000000000000000000000000000000000000000000000000000000000000",
  destination: "000000000000000000000000000000000000000000000000000000000000000000",
}

function LnPayment({ payment, loading = false }) {
  const data = payment || emptyPayment
  let emptyClass = data === emptyPayment || loading ? "filter blur-sm" : ""
  emptyClass = emptyClass + (loading ? " animate-pulse" : "")

  return (
    <div className="shadow p-6 min-w-0 rounded-lg shadow-xs overflow-hidden bg-white grid grid-cols-3 gap-4">
      <div>
        <p className="mb-4 font-semibold text-gray-600">Status</p>
        <p className={`text-gray-600 ${emptyClass}`}>{data.status}</p>
      </div>
      <div>
        <p className="mb-4 font-semibold text-gray-600">Amount</p>
        <p className={`text-gray-600 ${emptyClass}`}>{data.amount}</p>
      </div>
      <div>
        <p className="mb-4 font-semibold text-gray-600">Fee</p>
        <p className={`text-gray-600 ${emptyClass}`}>{data.roundedUpFee}</p>
      </div>
      <div>
        <p className="mb-4 font-semibold text-gray-600">Created At</p>
        <p className={`text-gray-600 ${emptyClass}`}>{formatDate(data.createdAt)}</p>
      </div>
      <div>
        <p className="mb-4 font-semibold text-gray-600">Confirmed At</p>
        <p className={`text-gray-600 ${emptyClass}`}>
          {data.confirmedAt ? formatDate(data.confirmedAt) : "--"}
        </p>
      </div>
      <div className="col-span-3">
        <p className="mb-4 font-semibold text-gray-600">Secret</p>
        <p className={`text-gray-600 break-all ${emptyClass}`}>{data.secret}</p>
      </div>
      <div className="col-span-3">
        <p className="mb-4 font-semibold text-gray-600">Destination</p>
        <p className={`text-gray-600 break-all ${emptyClass}`}>{data.destination}</p>
      </div>
      <div className="col-span-3">
        <p className="mb-4 font-semibold text-gray-600">Request</p>
        <p className={`text-gray-600 break-all ${emptyClass}`}>{data.request || "--"}</p>
      </div>
    </div>
  )
}

LnPayment.propTypes = {
  payment: PropTypes.object,
  loading: PropTypes.bool,
}

export default LnPayment
