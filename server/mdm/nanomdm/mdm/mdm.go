// Package mdm contains structures and helpers related to the Apple MDM protocol.
package mdm

import (
	"context"
	"crypto/x509"
	"errors"
)

// Enrollment represents the various enrollment-related data sent with requests.
type Enrollment struct {
	AwaitingConfiguration bool   `plist:",omitempty"`
	UDID                  string `plist:",omitempty"`
	UserID                string `plist:",omitempty"`
	UserShortName         string `plist:",omitempty"`
	UserLongName          string `plist:",omitempty"`
	EnrollmentID          string `plist:",omitempty"`
	EnrollmentUserID      string `plist:",omitempty"`
}

// Identifier returns the unique identifier for the device for a given enrollment. UDID
// should be preferred if it exists however for User (Device) enrollments we will never
// have the UDID and must use the randomly generated EnrollmentID.
func (e Enrollment) Identifier() string {
	if e.UDID != "" {
		return e.UDID
	}
	return e.EnrollmentID
}

// EnrollID contains the custom enrollment IDs derived from enrollment
// data. It's populated by services. Usually this is the main/core
// service so that middleware or storage layers that use the Request
// are able to use the custom IDs.
//
// Be aware that the identifiers here are what are used for MDM client
// identification all around: database primary keys, logging,
// certificate associations, etc. Their format can be changed but it
// must be consistent across the lifetime of any enrolled device.
type EnrollID struct {
	Type     EnrollType
	ID       string
	ParentID string
}

func (eid *EnrollID) Validate() error {
	if eid == nil {
		return errors.New("nil enrollment id")
	}
	if eid.ID == "" {
		return errors.New("empty enrollment id")
	}
	if !eid.Type.Valid() {
		return errors.New("invalid enrollment id type")
	}
	return nil
}

// Request represents an MDM client request.
type Request struct {
	*EnrollID
	Certificate *x509.Certificate
	Context     context.Context
	Params      map[string]string
	// Authorization header value, if any. Note that this is an optional value used only for
	// certain enrollment types like User (Device) enrollment.
	Authorization string
}

// Clone returns a shallow copy of r
func (r *Request) Clone() *Request {
	r2 := new(Request)
	*r2 = *r
	return r2
}
